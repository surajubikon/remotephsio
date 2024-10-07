import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css'
import Header from '../../componet/Header';
import Footer from '../../componet/Footer';

const Faq = () => {
   
    return (
      <>
        <Header />  
        <div className='faq-bg'>
        </div>
        <div className='container'>
            <div className='my-5'>
                <div className="accordion accordion-flush" id="accordionFlushExample">
                    <h5 className='mb-4 theme-color-text'>General FAQs:</h5>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingOne">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                             What is Remote Physios?
                        </button>
                        </h2>
                        <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">PRemote Physios is an innovative, tech-enabled Physiotherapy service that allows patients to receive personalized care from certified Physiotherapists in the comfort of their own homes. Our services are delivered remotely using video consultations and IoT-enabled devices to track progress in real-time.
                        </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                          How does Remote Physios work?
                        </button>
                        </h2>
                        <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">After an initial consultation with a certified Physiotherapist, a personalized treatment plan is developed based on your condition. If needed, IoT-enabled devices are delivered to your home. You then receive real-time Physiotherapy sessions via video consultations, and your progress is monitored remotely.
                        </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                             Do I need a referral from a doctor to use Remote Physios?
                        </button>
                        </h2>
                        <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">No, you do not need a referral from a doctor. However, if you have any underlying medical conditions, we recommend consulting your physician before starting Physiotherapy.
                        </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-heading4">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse4" aria-expanded="false" aria-controls="flush-collapse4">
                            What conditions can Remote Physios help treat?
                        </button>
                        </h2>
                        <div id="flush-collapse4" className="accordion-collapse collapse" aria-labelledby="flush-heading4" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            <ul className="list-unstyled">
                                <li>Remote Physios can help with a wide range of conditions, including:
                                </li>
                                <li>
                                    <ul>
                                        <li>Post-operative rehabilitation</li>
                                        <li>Musculoskeletal issues</li>
                                        <li>Sports injuries</li>
                                        <li>Posture and ergonomic correction</li>
                                        <li>Mobility and flexibility issues for seniors</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-heading5">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse5" aria-expanded="false" aria-controls="flush-collapse5">
                            Is Remote Physios covered by health insurance?
                        </button>
                        </h2>
                        <div id="flush-collapse5" className="accordion-collapse collapse" aria-labelledby="flush-heading5" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            <p>Coverage depends on your health insurance provider and plan. We recommend checking with your insurance company to determine if remote Physiotherapy services are covered.
                            </p>
                        </div>
                        </div>
                    </div>
                    
                    <h5 className='my-4 theme-color-text'>Booking & Sessions FAQs:</h5>
                    
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-heading6">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse6" aria-expanded="false" aria-controls="flush-collapse6">
                            How do I book a consultation with Remote Physios?
                        </button>
                        </h2>
                        <div id="flush-collapse6" className="accordion-collapse collapse" aria-labelledby="flush-heading6" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            <p>You can book a consultation through our website or mobile app by selecting a convenient date and time. You will receive a confirmation email once the booking is complete.

                            </p>
                        </div>
                        </div>
                    </div>
<div className="accordion-item">
    <h2 className="accordion-header" id="flush-heading7">
    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse7" aria-expanded="false" aria-controls="flush-collapse7">
        Can I reschedule or cancel my appointment?
    </button>
    </h2>
    <div id="flush-collapse7" className="accordion-collapse collapse" aria-labelledby="flush-heading7" data-bs-parent="#accordionFlushExample">
    <div className="accordion-body">
        <p>Yes, you can reschedule or cancel your appointment through your account on the website or app. Please ensure you do so at least 24 hours before the scheduled time to avoid any cancellation fees.
        </p>
    </div>
    </div>
</div>

<div className="accordion-item">
    <h2 className="accordion-header" id="flush-heading8">
    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse8" aria-expanded="false" aria-controls="flush-collapse8">
    How long are the Physiotherapy sessions?

    </button>
    </h2>
    <div id="flush-collapse8" className="accordion-collapse collapse" aria-labelledby="flush-heading8" data-bs-parent="#accordionFlushExample">
    <div className="accordion-body">
        <p>Each Physiotherapy session typically lasts between 30 and 60 minutes, depending on your treatment plan and progress.
        </p>
    </div>
    </div>
</div>

<div className="accordion-item">
    <h2 className="accordion-header" id="flush-heading9">
    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse9" aria-expanded="false" aria-controls="flush-collapse9">
        How do I prepare for a Remote Physios session?
    </button>
    </h2>
    <div id="flush-collapse9" className="accordion-collapse collapse" aria-labelledby="flush-heading9" data-bs-parent="#accordionFlushExample">
    <div className="accordion-body">
        <p>Ensure you have a quiet, private space with enough room to perform exercises. Have your IoT devices (if provided) ready and make sure your internet connection is stable for the video consultation.
        </p>
    </div>
    </div>
</div>

<div className="accordion-item">
    <h2 className="accordion-header" id="flush-heading10">
    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse10" aria-expanded="false" aria-controls="flush-collapse10">
    What should I wear during my session?

    </button>
    </h2>
    <div id="flush-collapse10" className="accordion-collapse collapse" aria-labelledby="flush-heading10" data-bs-parent="#accordionFlushExample">
    <div className="accordion-body">
        <p>Wear comfortable, loose-fitting clothing that allows for easy movement during exercises. Athletic wear or any clothing suitable for stretching is recommended.
        </p>
    </div>
    </div>
</div>
<h5 className='my-4 theme-color-text'>IoT Devices FAQs:</h5>

<div className="accordion-item">
    <h2 className="accordion-header" id="flush-heading11">
    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse11" aria-expanded="false" aria-controls="flush-collapse11">
        What are IoT-enabled Physiotherapy devices, and how do they work?
    </button>
    </h2>
    <div id="flush-collapse11" className="accordion-collapse collapse" aria-labelledby="flush-heading11" data-bs-parent="#accordionFlushExample">
    <div className="accordion-body">
        <p>Our IoT-enabled devices are advanced tools that help track and monitor your Physiotherapy exercises in real time. These devices collect data on your movements, strength, and flexibility, which helps your Physiotherapist make informed adjustments to your treatment plan.
        </p>
    </div>
    </div>
</div>

<div className="accordion-item">
    <h2 className="accordion-header" id="flush-heading12">
    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse12" aria-expanded="false" aria-controls="flush-collapse12">
        Do I need to purchase the IoT devices?
    </button>
    </h2>
    <div id="flush-collapse12" className="accordion-collapse collapse" aria-labelledby="flush-heading12" data-bs-parent="#accordionFlushExample">
    <div className="accordion-body">
        <p>No, the devices are provided on a rental basis for the duration of your treatment. Once your therapy is complete, you will need to return the devices to Remote Physios.
        </p>
    </div>
    </div>
</div>

<div className="accordion-item">
    <h2 className="accordion-header" id="flush-heading13">
    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse13" aria-expanded="false" aria-controls="flush-collapse13">
        What if I face issues with the IoT device during my session?
    </button>
    </h2>
    <div id="flush-collapse13" className="accordion-collapse collapse" aria-labelledby="flush-heading13" data-bs-parent="#accordionFlushExample">
    <div className="accordion-body">
        <p>If you experience any technical difficulties with the IoT device, please contact our technical support team. We will either guide you through troubleshooting or arrange for a replacement device if necessary.
        </p>
    </div>
    </div>
</div>

<div className="accordion-item">
    <h2 className="accordion-header" id="flush-heading14">
    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse14" aria-expanded="false" aria-controls="flush-collapse14">
    Are the IoT devices safe to use?
    </button>
    </h2>
    <div id="flush-collapse14" className="accordion-collapse collapse" aria-labelledby="flush-heading14" data-bs-parent="#accordionFlushExample">
    <div className="accordion-body">
        <p>Yes, all our IoT devices are rigorously tested and approved for home use. They come with clear instructions to ensure safe operation, and our Physiotherapists will guide you through the process during your sessions.
        </p>
    </div>
    </div>
</div>
      {/* FAQ 15 */}
      <div className="accordion-item">
        <h2 className="accordion-header" id="flush-heading15">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse15" aria-expanded="false" aria-controls="flush-collapse15">
            What happens if the IoT device gets damaged or lost?
          </button>
        </h2>
        <div id="flush-collapse15" className="accordion-collapse collapse" aria-labelledby="flush-heading15" data-bs-parent="#accordionFlushExample">
          <div className="accordion-body">
            If the device is damaged or lost while in your possession, you may be liable for repair or replacement costs. Please handle the equipment carefully and contact our team immediately in case of any issues.
          </div>
        </div>
      </div>

      <h5 className="theme-color-text">Treatment & Results FAQs:</h5>

      {/* FAQ 16 */}
      <div className="accordion-item">
        <h2 className="accordion-header" id="flush-heading16">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse16" aria-expanded="false" aria-controls="flush-collapse16">
            How soon can I expect to see results?
          </button>
        </h2>
        <div id="flush-collapse16" className="accordion-collapse collapse" aria-labelledby="flush-heading16" data-bs-parent="#accordionFlushExample">
          <div className="accordion-body">
            The timeline for results varies depending on the condition being treated, the severity of the issue, and your adherence to the treatment plan. Some patients experience improvement within a few sessions, while others may take longer.
          </div>
        </div>
      </div>

      {/* FAQ 17 */}
      <div className="accordion-item">
        <h2 className="accordion-header" id="flush-heading17">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse17" aria-expanded="false" aria-controls="flush-collapse17">
            Will I receive a progress report?
          </button>
        </h2>
        <div id="flush-collapse17" className="accordion-collapse collapse" aria-labelledby="flush-heading17" data-bs-parent="#accordionFlushExample">
          <div className="accordion-body">
            Yes, your Physiotherapist will provide regular updates on your progress and adjust your treatment plan as needed. You will also receive periodic reports summarizing your progress.
          </div>
        </div>
      </div>

      {/* FAQ 18 */}
      <div className="accordion-item">
        <h2 className="accordion-header" id="flush-heading18">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse18" aria-expanded="false" aria-controls="flush-collapse18">
            What if I feel pain or discomfort during a session?
          </button>
        </h2>
        <div id="flush-collapse18" className="accordion-collapse collapse" aria-labelledby="flush-heading18" data-bs-parent="#accordionFlushExample">
          <div className="accordion-body">
            If you experience any pain or discomfort during a session, stop immediately and inform your Physiotherapist. They will assess the situation and adjust your treatment plan accordingly.
          </div>
        </div>
      </div>

      {/* FAQ 19 */}
      <div className="accordion-item">
        <h2 className="accordion-header" id="flush-heading19">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse19" aria-expanded="false" aria-controls="flush-collapse19">
            Can I do the exercises on my own between sessions?
          </button>
        </h2>
        <div id="flush-collapse19" className="accordion-collapse collapse" aria-labelledby="flush-heading19" data-bs-parent="#accordionFlushExample">
          <div className="accordion-body">
            Yes, your Physiotherapist may provide exercises for you to perform between sessions to help accelerate your recovery. It is important to follow their instructions closely and maintain consistency for the best results.
          </div>
        </div>
      </div>

      {/* FAQ 20 */}
      <div className="accordion-item">
        <h2 className="accordion-header" id="flush-heading20">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse20" aria-expanded="false" aria-controls="flush-collapse20">
            What happens after my treatment plan is complete?
          </button>
        </h2>
        <div id="flush-collapse20" className="accordion-collapse collapse" aria-labelledby="flush-heading20" data-bs-parent="#accordionFlushExample">
          <div className="accordion-body">
            Once your treatment plan is complete, your Physiotherapist will review your progress and may recommend ongoing maintenance exercises or occasional check-in sessions to ensure long-term results.
          </div>
        </div>
      </div>

      {/* Continue for additional FAQs */}

      <h5 className='my-4 theme-color-text'>Technical & Support FAQs:</h5>
            {/* FAQ 21 */}
      <div className="accordion-item">
        <h2 className="accordion-header" id="flush-heading21">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse21" aria-expanded="false" aria-controls="flush-collapse21">
            What if I have issues with video consultations (e.g., poor internet connection)?
          </button>
        </h2>
        <div id="flush-collapse21" className="accordion-collapse collapse" aria-labelledby="flush-heading21" data-bs-parent="#accordionFlushExample">
          <div className="accordion-body">
            If you experience connectivity issues during a session, try troubleshooting your internet connection. If the problem persists, you can contact our technical support team, and they will assist you in rescheduling or fixing the issue.
          </div>
        </div>
      </div>

      {/* FAQ 22 */}
      <div className="accordion-item">
        <h2 className="accordion-header" id="flush-heading22">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse22" aria-expanded="false" aria-controls="flush-collapse22">
            How do I contact Remote Physios if I have a question or need assistance?
          </button>
        </h2>
        <div id="flush-collapse22" className="accordion-collapse collapse" aria-labelledby="flush-heading22" data-bs-parent="#accordionFlushExample">
          <div className="accordion-body">
            You can reach us via email at [support@remotePhysios.com], by phone at [Insert Phone Number], or by filling out the contact form on our website.
          </div>
        </div>
      </div>

      <h5 className='my-4 theme-color-text'>Pricing & Payment FAQs:</h5>

      {/* FAQ 23 */}
      <div className="accordion-item">
        <h2 className="accordion-header" id="flush-heading23">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse23" aria-expanded="false" aria-controls="flush-collapse23">
            How much does a Remote Physios session cost?
          </button>
        </h2>
        <div id="flush-collapse23" className="accordion-collapse collapse" aria-labelledby="flush-heading23" data-bs-parent="#accordionFlushExample">
          <div className="accordion-body">
            Session costs depend on the type of treatment plan and whether you are on a subscription package or pay-per-session model. Detailed pricing information is available on our website.
          </div>
        </div>
      </div>

      {/* FAQ 24 */}
      <div className="accordion-item">
        <h2 className="accordion-header" id="flush-heading24">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse24" aria-expanded="false" aria-controls="flush-collapse24">
            Do you offer discounts for corporate wellness programs or group sessions?
          </button>
        </h2>
        <div id="flush-collapse24" className="accordion-collapse collapse" aria-labelledby="flush-heading24" data-bs-parent="#accordionFlushExample">
          <div className="accordion-body">
            Yes, we offer special pricing and packages for corporate wellness programs. Please contact our sales team for more information on bulk bookings or group discounts.
          </div>
        </div>
      </div>

      {/* FAQ 25 */}
      <div className="accordion-item">
        <h2 className="accordion-header" id="flush-heading25">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse25" aria-expanded="false" aria-controls="flush-collapse25">
            What payment methods do you accept?
          </button>
        </h2>
        <div id="flush-collapse25" className="accordion-collapse collapse" aria-labelledby="flush-heading25" data-bs-parent="#accordionFlushExample">
          <div className="accordion-body">
            We accept all major credit/debit cards, bank transfers, and secure online payment gateways. Payment is required at the time of booking.
          </div>
        </div>
      </div>

      {/* FAQ 26 */}
      <div className="accordion-item">
        <h2 className="accordion-header" id="flush-heading26">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse26" aria-expanded="false" aria-controls="flush-collapse26">
            Can I get a refund if I cancel my session?
          </button>
        </h2>
        <div id="flush-collapse26" className="accordion-collapse collapse" aria-labelledby="flush-heading26" data-bs-parent="#accordionFlushExample">
          <div className="accordion-body">
            Refunds are available for cancellations made more than 24 hours before the scheduled session. For cancellations made within 24 hours, a cancellation fee may apply. Please refer to our Cancellation Policy for details.
          </div>
        </div>
      </div>

      <h5 className='my-4 theme-color-text'>Privacy & Security FAQs:</h5>

      {/* FAQ 27 */}
      <div className="accordion-item">
        <h2 className="accordion-header" id="flush-heading27">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse27" aria-expanded="false" aria-controls="flush-collapse27">
            Is my personal and health information secure?
          </button>
        </h2>
        <div id="flush-collapse27" className="accordion-collapse collapse" aria-labelledby="flush-heading27" data-bs-parent="#accordionFlushExample">
          <div className="accordion-body">
            Yes, we take your privacy and security seriously. All your personal and health information is encrypted and protected in compliance with data protection laws (such as GDPR and HIPAA).
          </div>
        </div>
      </div>

      {/* FAQ 28 */}
      <div className="accordion-item">
        <h2 className="accordion-header" id="flush-heading28">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse28" aria-expanded="false" aria-controls="flush-collapse28">
            Will my health data be shared with third parties?
          </button>
        </h2>
        <div id="flush-collapse28" className="accordion-collapse collapse" aria-labelledby="flush-heading28" data-bs-parent="#accordionFlushExample">
          <div className="accordion-body">
            Your health data will not be shared with third parties unless you provide explicit consent or it is required by law. For more details, please review our Privacy Policy.
          </div>
        </div>
      </div>

      {/* FAQ 29 */}
      <div className="accordion-item">
        <h2 className="accordion-header" id="flush-heading29">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse29" aria-expanded="false" aria-controls="flush-collapse29">
            How do you ensure the safety of my payment information?
          </button>
        </h2>
        <div id="flush-collapse29" className="accordion-collapse collapse" aria-labelledby="flush-heading29" data-bs-parent="#accordionFlushExample">
          <div className="accordion-body">
            All payment information is processed through secure, encrypted payment gateways. We do not store your credit card information on our servers.
          </div>
        </div>
      </div>



                </div>
            </div>
        </div>

        <Footer />
      </>
    )  
};

export default Faq;