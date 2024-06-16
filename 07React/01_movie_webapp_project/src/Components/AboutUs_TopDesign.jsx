function AboutUs_TopDesign ({design,imgUrl,heading1,heading2,textSummary}){
    return(
        <>
    <div className={design}>
        {heading1}
        <div>
            {heading2}
        </div>
    <img src={imgUrl} alt="" style={{width:"320px",height:"250px"}} className="my-4"/>

    <p className="fs-6">{textSummary}</p>

    <button type="button" className="btn btn-secondary mt-4">Learn more about our app</button>

    </div>
    </>
    )
}
export default AboutUs_TopDesign