import React from 'react'
import { Card, CardContent, CardHeader , CardFooter } from '../ui/card'
import star from '../../assets/images/Starrev.png'
import Verified from '../../assets/images/verificationimg.png';

interface ReviewCardProps {
    name: string;
    rating: number;
    review: string;
    date: string;
}

const ReviewCard = ({ name, rating, review, date }: ReviewCardProps) => {
    return (
        <div className='m-2 rounded-md '>
            <Card className='w-[610px] h-[241.5px] border border-[#0000001A] rounded-3xl p-6'>
                <CardHeader className=''>
                    <div className="flex items-center gap-1.5 ">
                        {Array.from({ length: 5 }).map((_, i) => (
                            <img
                                key={i}
                                src={star}
                                alt="star"
                                className={`w-[18px] h-[18px] lg:w-[22px] lg:h-[22px] ${i < rating ? 'opacity-100' : 'opacity-30'}`}
                            />
                        ))}
                    </div>
                </CardHeader>

                <CardContent className=' space-y-4'>
                    <div className="flex items-center gap-2">
                        <span className="font-semibold text-lg">{name}</span>
                        <div className="flex items-center gap-1">
                            <img src={Verified} alt="" />
                        </div>
                    </div>

                    <div className="text-text-300 leading-relaxed">
                        {review}
                    </div>
                </CardContent>
                <CardFooter>
                     <span className="text-sm text-[#00000080]">{date}</span>
                </CardFooter>
            </Card>
        </div>
    )
}

export default ReviewCard