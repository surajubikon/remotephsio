import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css'
import Header from '../../componet/Header';
import Footer from '../../componet/Footer';
import corporateWellness from '../../assets/images/theme-2/corporateWellness.png';
import { width } from '@fortawesome/free-solid-svg-icons/fa0';


const Services = () => {

    return (
        <>
            <Header />
            <div className='faq-bg'></div>

            <div className='service my-5'>
                <div class="container">
                    <div className='text-center mb-5'>
                        <h1>Remote Physio Services</h1>
                        <p>Bringing Health & Wellness to Your Home or Workplace</p>
                    </div>
                    {/* <!-- Corporate Employee Wellness --> */}
                    <div class="service-section">
                        <section class="">
                            <h2 className='my-4'>1. Corporate Employee Wellness</h2>
                            <h3 className=''>Is Your Desk Job Taking a Toll on Your Health?</h3>
                            <p>
                                Sedentary work environments can lead to back pain, neck strain, and poor posture, affecting not just your physical health but also your productivity. You might notice these symptoms, but finding the time to visit a physiotherapy clinic feels impossible.
                            </p>

                            <h3>"Remote Physio Brings Health & Wellness to Your Workplace"</h3>
                            <p>
                                At Remote Physio, we understand that balancing work and health can be difficult. Our Corporate Employee Wellness Program is designed to offer convenient, effective physiotherapy solutions directly to your employees—whether they're in the office or at home. From personalized care to ergonomic advice, we create wellness programs that fit into the busy schedules of corporate employees.
                            </p>

                            <h3>What We Offer:</h3>
                            <ul>
                                <li>Virtual physiotherapy assessments and treatment plans for each employee.</li>
                                <li>Expert ergonomic advice to improve posture and reduce strain.</li>
                                <li>Health seminars and wellness camps to educate employees on preventing musculoskeletal issues.</li>
                                <li>Regular monitoring and adjustments to ensure long-term health improvements.</li>
                            </ul>
                            <h4> Improve Your Team’s Health & Productivity Today </h4>
                            <p>Invest in the health of your workforce. Contact us to schedule a wellness seminar or arrange personalized assessments for your employees.</p>
                        </section>
                        <div className='mt-5 text-center'><img width="500px" src={corporateWellness} /></div>
                    </div>
                    <div className='service-section'>

                        <section>
                            <h2 className='my-4'>2. Elder Care Physiotherapy</h2>
                            <h3>Are You or Your Loved Ones Struggling with Mobility?</h3>
                            <p>
                                As we grow older, maintaining mobility becomes increasingly challenging. Joint stiffness, muscle weakness, and balance issues can make even daily tasks difficult. Traditional physiotherapy may feel out of reach, especially if mobility is already limited.
                            </p>

                            <h3>"Empowering Seniors to Stay Active and Independent"</h3>
                            <p>
                                Remote Physio offers elder care physiotherapy services that allow seniors to receive personalized treatment from the comfort of their homes. We focus on improving mobility, strength, and coordination, helping elderly individuals stay active, independent, and healthy.
                            </p>

                            <h3>What We Offer:</h3>
                            <ul>
                                <li>Safe, personalized exercise programs to strengthen muscles and improve mobility.</li>
                                <li>Balance and coordination training to prevent falls and injuries.</li>
                                <li>Compassionate support and guidance for both seniors and caregivers.</li>
                                <li>Regular check-ins and progress monitoring to ensure the best care.</li>
                            </ul>

                            <h4>Keep Moving with Remote Physio’s Elder Care</h4>
                            <p>Help yourself or your loved ones stay active and independent. Schedule a consultation today.</p>
                        </section>
                    </div>
                    <div class="service-section">
                        <section>
                            <h2 className='my-4'>3. Joint Pain and Stiffness</h2>
                            <h3>"Does Joint Pain Hold You Back from Enjoying Life?"</h3>
                            <p>
                                Whether it's your knees, shoulders, or hips, joint pain and stiffness can make everyday tasks feel unbearable. But finding time to seek professional care may seem overwhelming.
                            </p>

                            <h3>"Relieve Joint Pain from the Comfort of Your Home"</h3>
                            <p>
                                Remote Physio provides specialized treatment for joint pain and stiffness. Our certified physiotherapists create personalized plans that improve joint mobility and alleviate pain, all without requiring a clinic visit. With our remote services, you can begin your path to relief and recovery from wherever you are.
                            </p>

                            <h3>What We Offer:</h3>
                            <ul>
                                <li>Comprehensive assessments to identify the cause of joint pain.</li>
                                <li>Personalized treatment plans targeting specific joints and areas of stiffness.</li>
                                <li>Strengthening exercises and joint mobilization techniques to improve function.</li>
                                <li>Use of IoT devices to track your progress in real-time.</li>
                            </ul>

                            <h4>“Don’t Let Joint Pain Limit You”</h4>
                            <p>Take the first step toward pain-free movement. Contact us to schedule a consultation.</p>
                        </section>
                    </div>
                    <div class="service-section">
                        <section>
                            <h2 className='my-4'>4. Generalized Muscular Pains</h2>
                            <h3>"Is Persistent Muscle Pain Affecting Your Daily Life?"</h3>
                            <p>
                                Muscle pain and tension can result from overuse, stress, or injuries. You might ignore the discomfort, but without proper care, the pain could worsen.
                            </p>

                            <h3>"Target and Treat Muscular Pain with Remote Physio"</h3>
                            <p>
                                At Remote Physio, we provide effective treatment for generalized muscle pain. Through personalized assessments and remote therapy, we develop plans to relieve tension, improve strength, and restore normal function. You don’t need to leave your home to get the care you deserve.
                            </p>

                            <h3>What We Offer:</h3>
                            <ul>
                                <li>Initial assessments to understand your muscular pain.</li>
                                <li>Personalized stretching and strengthening routines to relieve tension.</li>
                                <li>Progress tracking to ensure continuous improvement.</li>
                                <li>Support from certified physiotherapists throughout the process.</li>
                            </ul>

                            <h4>Say Goodbye to Muscle Pain Today</h4>
                            <p>Find relief from muscular pain without leaving your home. Schedule your consultation now.</p>
                        </section>
                    </div>
                    {/* <!-- Post-Surgical Recovery --> */}
                    <div class="service-section">
                        <section>
                            <h2 className='my-4'>5. Post-Surgical Recovery</h2>
                            <h3>"Recovering from Surgery? Struggling to Get Back on Your Feet?"</h3>
                            <p>
                                Surgery is just the first step in your recovery journey. The next challenge is regaining strength, mobility, and independence. But traveling for post-surgical therapy can be exhausting.
                            </p>

                            <h3>"Recover Safely and Comfortably at Home"</h3>
                            <p>
                                Remote Physio’s Post-Surgical Recovery Program is tailored to help you rebuild strength and mobility after surgery. Our certified physiotherapists develop custom rehabilitation plans to ensure you recover safely and efficiently, all from the comfort of your home.
                            </p>

                            <h3>What We Offer:</h3>
                            <ul>
                                <li>Personalized rehabilitation programs based on your surgery and recovery goals.</li>
                                <li>Gradual strengthening exercises to rebuild mobility and function.</li>
                                <li>IoT-enabled devices to monitor your progress remotely.</li>
                                <li>Continuous support from experienced physiotherapists.</li>
                            </ul>

                            <h4>Begin Your Journey to Full Recovery</h4>
                            <p>Recover safely at home with Remote Physio. Book your post-surgical consultation today.</p>
                        </section>
                    </div>
                    {/* Recovery from Neurological Conditions  */}
                    <div class="service-section">
                        <section>
                            <h2 className='my-4'>6. Recovery from Neurological Conditions</h2>
                            <h3>"Facing Mobility Challenges Due to a Neurological Condition?"</h3>
                            <p>
                                Conditions like stroke, Parkinson’s disease, or multiple sclerosis can severely impact your movement, coordination, and balance. But you don’t have to face these challenges alone.
                            </p>

                            <h3>"Regain Function and Independence with Remote Physio"</h3>
                            <p>
                                Remote Physio offers specialized rehabilitation for individuals recovering from neurological conditions. Our programs are designed to restore mobility, improve coordination, and help you regain control over your body, all from the comfort of your home.
                            </p>

                            <h3>What We Offer:</h3>
                            <ul>
                                <li>Comprehensive assessments to understand your specific challenges.</li>
                                <li>Personalized exercise plans targeting strength, balance, and coordination.</li>
                                <li>Gait training and mobility exercises to restore function.</li>
                                <li>Ongoing support from compassionate, experienced physiotherapists.</li>
                            </ul>

                            <h4>Reclaim Your Independence</h4>
                            <p>Let Remote Physio help you regain control of your mobility. Schedule your neurological recovery assessment today.</p>
                        </section>
                    </div>
                    {/* Cardiac Rehabilitation  */}
                    <div class="service-section">
                        <section>
                            <h2 className='my-4'>7. Cardiac Rehabilitation</h2>
                            <h3>"Recovering from a Heart Attack or Heart Surgery?"</h3>
                            <p>
                                Post-heart surgery or a heart attack, rehabilitation is critical for restoring your strength and preventing further complications. But traveling to a clinic for care can feel overwhelming.
                            </p>

                            <h3>"Restore Heart Health with Home-Based Cardiac Rehab"</h3>
                            <p>
                                Remote Physio’s Cardiac Rehabilitation Program helps patients safely rebuild their cardiovascular strength through customized, monitored exercise plans. Our remote therapy allows you to recover at your own pace while still under the guidance of certified professionals.
                            </p>

                            <h3>What We Offer:</h3>
                            <ul>
                                <li>Cardiovascular exercises designed to improve heart health.</li>
                                <li>Continuous heart monitoring and progress tracking through IoT devices.</li>
                                <li>Lifestyle guidance, including diet and stress management.</li>
                                <li>Safe and supportive recovery under the supervision of trained physiotherapists.</li>
                            </ul>

                            <h4>Start Your Heart Recovery Journey</h4>
                            <p>Get the care you need at home. Schedule your cardiac rehab consultation today.</p>
                        </section>
                    </div>

                    {/* Pulmonary Rehabilitation  */}
                    <div class="service-section">
                        <section>
                            <h2 className='my-4'>8. Pulmonary Rehabilitation</h2>
                            <h3>"Struggling with Chronic Lung Conditions?"</h3>
                            <p>
                                If you’re living with COPD, asthma, or other chronic lung conditions, daily tasks can feel overwhelming due to shortness of breath. But help is within reach.
                            </p>

                            <h3>"Breathe Easier with Remote Pulmonary Rehab"</h3>
                            <p>
                                Remote Physio offers tailored pulmonary rehabilitation plans designed to help you improve lung function and manage chronic symptoms. From breathing exercises to endurance training, our program helps you regain control over your breathing and daily life.
                            </p>

                            <h3>What We Offer:</h3>
                            <ul>
                                <li>Personalized breathing exercises to increase lung capacity.</li>
                                <li>Aerobic conditioning to improve stamina and reduce breathlessness.</li>
                                <li>Ongoing support and guidance from physiotherapists.</li>
                                <li>Symptom management and lifestyle education.</li>
                            </ul>

                            <h4>Take a Deep Breath—Help is Here</h4>
                            <p>Start breathing easier with our remote pulmonary rehab services. Schedule your consultation today.</p>
                        </section>
                    </div>
                    {/* Endurance Training  */}
                    <div class="service-section">
                        <section>
                            <h2 className='my-4'>9. Endurance Training</h2>
                            <h3>"Want to Build Endurance for Better Performance?"</h3>
                            <p>
                                Whether you’re recovering from an illness or preparing for an athletic event, endurance training is essential to improve your stamina and overall health.
                            </p>

                            <h3>"Build Strength and Stamina with Remote Physio’s Endurance Training"</h3>
                            <p>
                                Our endurance training program is designed to help you gradually increase your stamina and cardiovascular fitness, allowing you to excel in your daily life and sports activities. With real-time progress monitoring, our program ensures safe, effective results.
                            </p>

                            <h3>What We Offer:</h3>
                            <ul>
                                <li>Customized cardiovascular exercises suited to your fitness goals.</li>
                                <li>Gradual progression to build strength and endurance.</li>
                                <li>Continuous tracking to ensure safe progress.</li>
                                <li>Nutrition and lifestyle guidance to support your training.</li>
                            </ul>

                            <h4>Boost Your Endurance Today</h4>
                            <p>Build stamina and improve your health. Schedule your endurance training consultation now.</p>
                        </section>
                    </div>
                    {/* Stretch Your Muscles  */}
                    <div class="service-section">
                        <section>
                            <h2 className='my-4'>10. Stretch Your Muscles</h2>
                            <h3>"Feeling Tight and Stiff?"</h3>
                            <p>
                                Muscle stiffness and tightness can limit your range of motion and increase your risk of injury. Stretching is a simple yet essential way to improve flexibility and prevent discomfort.
                            </p>

                            <h3>"Improve Flexibility and Reduce Tension with Remote Physio"</h3>
                            <p>
                                Our Stretch Your Muscles program provides personalized stretching routines to help you improve flexibility, reduce muscle tension, and prevent injuries. With the guidance of certified physiotherapists, you’ll learn proper stretching techniques that fit into your daily routine.
                            </p>

                            <h3>What We Offer:</h3>
                            <ul>
                                <li>Personalized stretching routines based on your needs.</li>
                                <li>Safe, effective techniques to improve flexibility.</li>
                                <li>Real-time guidance via video consultations.</li>
                                <li>Regular progress checks to ensure continuous improvement.</li>
                            </ul>

                            <h4>Stretch Your Way to Better Flexibility</h4>
                            <p>Start feeling looser and more flexible. Schedule your stretching consultation today.</p>
                        </section>
                    </div>
                    {/* Balance and Coordination Training  */}
                    <div class="service-section">
                        <section>
                            <h2 className='my-4'>11. Balance and Coordination Training</h2>
                            <h3>"Worried About Losing Your Balance?"</h3>
                            <p>
                                Maintaining balance and coordination is key to preventing falls and staying active. If you’ve noticed instability in your movements, it’s time to take action.
                            </p>

                            <h3>"Strengthen Your Balance and Coordination with Remote Physio"</h3>
                            <p>
                                Our Balance and Coordination Training program is designed to improve your stability, mobility, and confidence. Through personalized exercises, we help you build strength and reduce your risk of falls, ensuring you stay safe and independent.
                            </p>

                            <h3>What We Offer:</h3>
                            <ul>
                                <li>Personalized balance and coordination exercises.</li>
                                <li>Gait training to improve stability and walking ability.</li>
                                <li>Strengthening exercises to support balance and prevent falls.</li>
                                <li>Ongoing monitoring to track your progress.</li>
                            </ul>

                            <h4>Stay Steady on Your Feet</h4>
                            <p>Improve your balance and coordination today. Book your consultation with Remote Physio.</p>
                        </section>
                    </div>


                </div>
            </div>

            <Footer />
        </>
    )
};

export default Services;