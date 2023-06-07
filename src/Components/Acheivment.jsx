
import webc1 from '../Images/webc1.png'
import webc2 from '../Images/webc2.png'
import webc3 from '../Images/webc3.png'
import webc4 from '../Images/webc4.png'
import webc5 from '../Images/webc5.png'
import webc6 from '../Images/webc6.png'
function Achievment() {
    return(
        <>
       
        <div class="container px-5 py-2 lg:px-32 lg:pt-24 max-w-full flex" id="acheive">
  <div class=" flex flex-wrap md:-m-2 w-2/3 h-full relative bottom-0 right-20 w-2/4">
    <div class="flex w-1/2 flex-wrap">
      <div class="w-1/2 p-1 md:p-2">
        <img
          alt="gallery"
          class="block h-full w-full rounded-lg object-cover object-center"
          src={webc5} />
      </div>
      <div class="w-1/2 p-1 md:p-2">
        <img
          alt="gallery"
          class="block h-full w-full rounded-lg object-cover object-center"
          src={webc4} />
      </div>
      <div class="w-full p-1 md:p-2">
        <img
          alt="gallery"
          class="block h-full w-full rounded-lg object-cover object-center"
          src={webc1}/>
      </div>
    </div>
    <div class="flex w-1/2 flex-wrap">
      <div class="w-full p-1 md:p-2">
        <img
          alt="gallery"
          class="block h-full w-full rounded-lg object-cover object-center"
          src={webc2} />
      </div>
      <div class="w-1/2 p-1 md:p-2">
        <img
          alt="gallery"
          class="block h-full w-full rounded-lg object-cover object-center"
          src={webc6} />
      </div>
      <div class="w-1/2 p-1 md:p-2">
        <img
          alt="gallery"
          class="block h-full w-full rounded-lg object-cover object-center"
          src={webc3} />
      </div>
    </div>
  </div>


<div className="font-poppins text-white relative w-2/4 right-0 left-10 bottom-10">
  <h1 className='text-2xl font-bold pb-4 '>// WebCamp Creator</h1>
<p className='pb-2 text-gray-300'>WebCamp is an Instagram account that I created with the purpose of explaining IT terms, particularly in web development. The concept of the profile has resonated with many people, and we have received positive feedback. In fact, our efforts have attracted the attention of notable companies interested in collaborating with us.</p>

<p className='pb-2 text-gray-300'>One such company is the NFT company, Auma, which expressed their interest in our Instagram profile. They conveyed their enthusiasm to cooperate with us, stating, "It will be a pleasure for us to collaborate with you." This recognition from Auma validates the value and appeal of our content.</p>

<p className='pb-2 text-gray-300'>Furthermore, an ecommerce company, T-post, reached out to us, expressing their appreciation for our style. They were intrigued and sought to connect, stating, "It would really be awesome to see you sport T-post, the world's first wearable magazine." The interest from T-post further reinforces the positive reception and potential partnerships that our Instagram account has garnered.</p>

</div>
</div>
        </>
    )
}
export default Achievment