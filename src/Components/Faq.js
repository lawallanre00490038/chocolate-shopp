import React from 'react'

const Faq = () => {
  return (
    <div class="p-5" id="questions">
        <section className="accordion" id="accordionExample">
            <h1 className= 'text-center'>Frequently Asked Questions.</h1>
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"  aria-expanded="true" aria-controls="collapseOne">
                        How much is shipping?
                    </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <p>We only charge a flat, $6.99 fee for all shipping deliveries Australia wide.</p>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Can you cancel subscription anytime?
                    </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <p>Of course! If at any moment you want to change your subscription or cancel it, you can do so whenever you like!</p>
                    </div>
                </div>
            </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingThree">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            How do i keep the beans fresh?
                        </button>
                    </h2>
                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <p>We roast them fresh daily. They are the placed into sealed bags and shipped to customers. The gas valve is also super important for removing gas from the sealed bag, keeping the beans super fresh!</p>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingFour">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                        Where do you source your beans from?
                    </button>
                </h2>
                <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <p>We have tasted hundreds of different beans from South America. We will only have a final supply of 7 blends. Our first two blends originate from Brazil, with Emerald coming from Peru! Where will the final 4 come from? I guess you will have to wait and find out!</p>
                    </div>
                 </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingFive">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                        What makes Diva Espresso different from others?
                    </button>
                </h2>
                <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <p>We focus on provide the highest quality beans possible. Our goal is to help you feel your absolute best, which is why we offer a 60-day, money back guarantee. If at any point over a 60-day period of any first time purchase, you decide our products are not right for you, then get in touch as you are protected by a 100% money-back guarantee.</p>
                    </div>
                 </div>
            </div>


        </section>
    </div>
  )
}

export default Faq