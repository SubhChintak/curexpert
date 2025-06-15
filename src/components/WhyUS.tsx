import React from 'react';
import { motion } from "framer-motion";
import DynamicCounter from "@/components/DynamicCounter";

const WhyUS = () => {
  return (
    <section className="py-20 bg-white dark:bg-black">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Why Choose <span className="text-blue-600 dark:text-blue-400">CureXpert India</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Discover the factors that make us the preferred healthcare facilitator for patients across India.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <motion.div 
                className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 p-8 rounded-xl text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <div className="bg-blue-500 dark:bg-blue-800 w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6 shadow-lg">
                  <svg className="w-10 h-10 text-blue-900 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  Trusted Network
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Partner with vetted healthcare providers known for excellence and patient satisfaction.
                </p>
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                  <DynamicCounter end={150} suffix="+" prefix="" />
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Patients Served</p>
              </motion.div>
              
              <motion.div 
                className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 p-8 rounded-xl text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <div className="bg-blue-500 dark:bg-blue-800 w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6 shadow-lg">
                  <svg className="w-10 h-10 text-blue-900 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  24/7 Support
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Our dedicated team is available round-the-clock to assist with your healthcare needs.
                </p>
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                  <DynamicCounter end={365} suffix=" days/year" prefix="" />
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Always Available</p>
              </motion.div>
              
              <motion.div 
                className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 p-8 rounded-xl text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <div className="bg-blue-500 dark:bg-blue-800 w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6 shadow-lg">
                  <svg className="w-10 h-10 text-blue-900 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  Cost Transparency
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Clear information about treatment costs and financial planning support.
                </p>
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                  <DynamicCounter end={30} suffix="%" prefix="Up to " />
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Cost Savings</p>
              </motion.div>
              
              <motion.div 
                className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 p-8 rounded-xl text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <div className="bg-blue-500 dark:bg-blue-800 w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6 shadow-lg">
                  <svg className="w-10 h-10 text-blue-900 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  End-to-End Care
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                Convenient travel arrangements tailored to ensure a smooth and stress-free experience for individuals.
                </p>
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                  <DynamicCounter end={55} suffix="+" prefix="" />
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Healthcare Partners</p>
              </motion.div>
            </div>
          </div>
        </section>
  )
}

export default WhyUS
