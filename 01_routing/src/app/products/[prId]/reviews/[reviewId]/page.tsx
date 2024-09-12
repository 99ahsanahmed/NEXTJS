import {notFound} from "next/navigation";
export default function reviews( 
    {params}:{
        params:{
            prId:string,
            reviewId:string,
        }
    } 
) {
    if(parseInt(params.reviewId) > 6 ){
        notFound();
    }
    return (
      <>
      this is the review no. {params.reviewId} for product {params.prId}
      </>
    );
  }