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
                                At Remote Physio, we understand that balancing work and health can be difficult. Our Corporate Employee Wellness Program is designed to offer convenient, effective physiotherapy solutions directly to your employees—whether they're in the office or at home. From personalized care to ergonomic advice, we create wellness programs that fit into the busy schedules of corporate employe.. <Link to="/services/corporate" className='btn-link'>Read More</Link>
                            </p>
                        </section>


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
                                Remote Physio offers elder care physiotherapy services that allow seniors to receive personalized treatment from the comfort of their homes. We focus on improving mobility, strength, and coordination, helping elderly individuals stay active, independent, and heal.. <Link to="/services/elder" className='btn-link'>Read More</Link>
                            </p>

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
                                Remote Physio provides specialized treatment for joint pain and stiffness. Our certified physiotherapists create personalized plans that improve joint mobility and alleviate pain, all without requiring a clinic visit. With our remote services, you can begin your path to relief and recovery from wherever yo.. <Link to="/services/joint" className='btn-link'>Read More</Link>
                            </p>

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
                                At Remote Physio, we provide effective treatment for generalized muscle pain. Through personalized assessments and remote therapy, we develop plans to relieve tension, improve strength, and restore normal function. You don’t need to leave your home to get the care you dese.. <Link to="/services/generalized" className='btn-link'>Read More</Link>
                            </p>
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
                                Remote Physio’s Post-Surgical Recovery Program is tailored to help you rebuild strength and mobility after surgery. Our certified physiotherapists develop custom rehabilitation plans to ensure you recover safely and efficiently, all from the comfort of your ho.. <Link to="/services/surgical" className='btn-link'>Read More</Link>
                            </p>

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
                                Remote Physio offers specialized rehabilitation for individuals recovering from neurological conditions. Our programs are designed to restore mobility, improve coordination, and help you regain control over your body, all from the comfort of your ho.. <Link to="/services/neurological" className='btn-link'>Read More</Link>
                            </p>

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
                                Remote Physio’s Cardiac Rehabilitation Program helps patients safely rebuild their cardiovascular strength through customized, monitored exercise plans. Our remote therapy allows you to recover at your own pace while still under the guidance of certified profession.. <Link to="/services/cardiac" className='btn-link'>Read More</Link>
                            </p>

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
                                Remote Physio offers tailored pulmonary rehabilitation plans designed to help you improve lung function and manage chronic symptoms. From breathing exercises to endurance training, our program helps you regain control over your breathing and daily li.. <Link to="/services/pulmonary" className='btn-link'>Read More</Link>
                            </p>
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
                                Our endurance training program is designed to help you gradually increase your stamina and cardiovascular fitness, allowing you to excel in your daily life and sports activities. With real-time progress monitoring, our program ensures safe, effective resul.. <Link to="/services/endurance" className='btn-link'>Read More</Link>
                            </p>
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
                                Our Stretch Your Muscles program provides personalized stretching routines to help you improve flexibility, reduce muscle tension, and prevent injuries. With the guidance of certified physiotherapists, you’ll learn proper stretching techniques that fit into your daily routi.. <Link to="/services/stretch" className='btn-link'>Read More</Link>
                            </p>
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
                                Our Balance and Coordination Training program is designed to improve your stability, mobility, and confidence. Through personalized exercises, we help you build strength and reduce your risk of falls, ensuring you stay safe and indepen.. <Link to="/services/balance" className='btn-link'>Read More</Link>
                            </p>
                        </section>
                    </div>


                </div>
            </div>

            <Footer />
        </>
    )
};

export default Services;