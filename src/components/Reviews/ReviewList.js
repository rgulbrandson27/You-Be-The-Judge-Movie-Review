
import './ReviewList.css';

const ReviewList = () => {
    return (
        <div className="comments-list">
        <div className="reviewer-comment">
            <p className="name-rating-row"> <span className='name-r'>Raina</span><span className="rating-r">5.0</span></p> 
            {/* <p className="line">____________</p> */}
            <p className="comments-r">Athk;asd;lkfjads</p>
            <p className="date-r">Date</p>
            <p className="line">_________________________________</p>
        </div>
        <div className="reviewer-comment">
            <p className="name-rating-row"> <span className='name-r'>Raina</span><span className="rating-r">5.0</span></p> 
            {/* <p className="line">____________</p> */}
            <p className="comments-r">Athk;asd;lkfjads</p>
            <p className="date-r">Date</p>
            <p className="line">_________________________________</p>
        </div>
        <div className="reviewer-comment">
            <p className="name-rating-row"> <span className='name-r'>Raina</span><span className="rating-r">5.0</span></p> 
            {/* <p className="line">____________</p> */}
            <p className="comments-r">Athk;asd;lkfjads</p>
            <p className="date-r">Date</p>
            <p className="line">_________________________________</p>
        </div>
        </div>
        
    )
}

export default ReviewList;