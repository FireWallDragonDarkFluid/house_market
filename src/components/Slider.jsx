import {useEffect,useState} from 'react'
import { useNavigate } from 'react-router-dom'
import {collection,getDocs,query,orderBy,limit} from 'firebase/firestore'
import {db} from '../firebase.config'
import Spinner from './Spinner'

//Swiper
import { Pagination,A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

const Slider = () => {
    const [loading, setLoading] = useState(true)
    const [listings, setListings] = useState(null)
    const navigate = useNavigate()
    useEffect(()=>{
        const fetchListing = async () => {
            const listingsRef = collection(db,'listings')
            const q = query(listingsRef,orderBy('timestamp','desc'),limit(5))
            const querySnap = await getDocs(q)
            let listings = []
            querySnap.forEach(doc=>{
                return listings.push({
                    id:doc.id,
                    data:doc.data()
                })
            })
            setListings(listings)
            setLoading(false)
        }
        fetchListing()
    },[])
    if(loading) return <Spinner />
    return (
        <>
            <p className="exploreHeading">Recommended</p>  
            <Swiper
                // install Swiper modules
                style={{height:'300px'}}
                modules={[Pagination, A11y]}
                slidesPerView={1}
                pagination={{ clickable: true }}
            >
                {listings.map(({data,id})=>(
                    <SwiperSlide key={id} onClick={()=>navigate(`/category/${data.type}/${id}`)}>
                        <div className='swiperSlideDiv' style={{background:`url(${data.imageUrls[0]}) no-repeat center center/cover`}}>
                            <p className="swiperSlideText">{data.name}</p>
                            <p className="swiperSlidePrice">${data.discountedPrice ?? data.regularPrice}{' '}
                            {data.type==="rent" && "/month"}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}

export default Slider