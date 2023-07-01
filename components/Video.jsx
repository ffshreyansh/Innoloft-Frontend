import { useProductData } from "@/modals/productData"

const Video = () => {
    const productData = useProductData();
    return (
    <div className="w-full c1 rounded-md p-4">
        <span className=" float-left text-lg font-semibold text-mainColor">Video</span>
        {/* <iframe className="p-4 mt-4 w-full h-72" src={productData.video} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
        {/* <iframe src={productData.video} frameborder="0"></iframe> */}
        <iframe className="p-4 mt-4 w-full h-96 vdo" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Rick Astley - Never Gonna Give You Up (Official Music Video)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  )
}

export default Video