import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, DollarSign, Calendar, Shield, Truck } from 'lucide-react';

type FAQItem = {
  question: string;
  answer: string;
};

type FAQCategory = {
  title: string;
  icon: React.ReactNode;
  items: FAQItem[];
};

const FAQAccordion = ({ question, answer }: FAQItem) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden mb-4">
      <button
        className="w-full px-6 py-4 text-left flex justify-between items-center bg-white hover:bg-gray-50 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium text-gray-900">{question}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-blue-600" />
        ) : (
          <ChevronDown className="w-5 h-5 text-blue-600" />
        )}
      </button>
      {isOpen && (
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
          <p className="text-gray-600">{answer}</p>
        </div>
      )}
    </div>
  );
};

export function FAQ() {
  const faqCategories: FAQCategory[] = [
    {
      title: 'Rental Information',
      icon: <HelpCircle className="w-6 h-6" />,
      items: [
        {
          question: 'What is included in the rental price?',
          answer: 'Our flat-rate pricing includes delivery, setup, takedown, and cleaning. There are no hidden fees or surprise charges. We handle all the logistics so you can focus on enjoying your event.'
        },
        {
          question: 'What is your service area?',
          answer: 'We serve Rockwall, TX and surrounding areas within a 25-mile radius. This includes Royse City, Fate, Heath, Forney, and Terrell. For locations outside this area, additional delivery fees may apply.'
        },
        {
          question: 'How long can we keep the equipment?',
          answer: 'Standard rental periods are 6-8 hours. For full-day events, we offer extended rentals at no additional cost. Weekend packages are also available for multi-day events.'
        },
        {
          question: 'What happens in case of bad weather?',
          answer: "Safety is our priority. If weather conditions are unsafe (heavy rain, strong winds, or lightning), we'll work with you to reschedule or provide a full refund. We monitor weather forecasts and will contact you in advance if issues are expected."
        }
      ]
    },
    {
      title: 'Booking & Payment',
      icon: <DollarSign className="w-6 h-6" />,
      items: [
        {
          question: 'How do I book equipment?',
          answer: "You can book through our website, by phone, or by email. We'll confirm availability and provide a quote. Once you approve, we'll secure your date with a deposit and send a confirmation with all the details."
        },
        {
          question: 'What payment methods do you accept?',
          answer: 'We accept all major credit cards, cash, and electronic payments including PayPal and Venmo. For corporate events, we can provide invoicing options with net-30 terms.'
        },
        {
          question: 'Is a deposit required?',
          answer: 'Yes, we require a 25% deposit to secure your booking date. The remaining balance is due on the day of delivery before setup begins. For large events, final payment may be required 48 hours in advance.'
        },
        {
          question: 'What is your cancellation policy?',
          answer: 'Cancellations made 14+ days before your event receive a full refund. Cancellations 7-13 days before receive a 50% refund. Cancellations less than 7 days before the event are non-refundable, but we can help reschedule for a future date depending on availability.'
        }
      ]
    },
    {
      title: 'Safety & Maintenance',
      icon: <Shield className="w-6 h-6" />,
      items: [
        {
          question: 'How do you clean the equipment?',
          answer: 'All equipment is thoroughly sanitized between each use following CDC guidelines. We use hospital-grade disinfectants on all surfaces and high-touch areas. Our cleaning process includes pressure washing, sanitizing, and complete drying.'
        },
        {
          question: 'Are your bounce houses safe?',
          answer: 'Yes! All our equipment is regularly inspected and meets strict safety standards. We are fully certified and insured. Our equipment undergoes thorough safety checks before and after each rental, and we provide safety instructions with every setup.'
        },
        {
          question: 'Do you provide insurance?',
          answer: 'Yes, we are fully insured with commercial liability insurance. We can provide a certificate of insurance upon request, which some venues require for events.'
        },
        {
          question: 'What safety guidelines should we follow?',
          answer: 'We provide detailed safety instructions with each rental. General guidelines include adult supervision at all times, no food or drinks inside bounce houses, removing shoes and sharp objects, and following capacity limits. Our team will review all safety procedures during setup.'
        }
      ]
    },
    {
      title: 'Delivery & Setup',
      icon: <Truck className="w-6 h-6" />,
      items: [
        {
          question: 'How much space is needed for setup?',
          answer: 'Space requirements vary by item. Bounce houses typically need a 15x15 ft area plus additional clearance for stakes and tethers. Tables and chairs require space according to your layout. We can help plan space requirements during the booking process.'
        },
        {
          question: 'How long does setup take?',
          answer: 'Setup times vary depending on the equipment rented. Most bounce houses take 30-45 minutes to set up. Full event setups with multiple items can take 1-2 hours. We always arrive with plenty of time before your event starts.'
        },
        {
          question: 'Do you need access to electricity?',
          answer: "Yes, inflatables require continuous airflow from an electric blower. You'll need access to a standard 110V outlet within 100 feet of the setup location. If electricity isn't available, we offer generator rentals for an additional fee."
        },
        {
          question: 'Can equipment be set up on any surface?',
          answer: 'Bounce houses can be set up on grass, concrete, asphalt, or indoors with sufficient height clearance. For concrete or asphalt, we use sandbags instead of stakes. We cannot set up on gravel, rocky surfaces, or steeply sloped areas for safety reasons.'
        }
      ]
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="max-w-2xl mx-auto text-blue-100">
            Find answers to common questions about our rental services, booking process, and equipment.
            If you don't see what you're looking for, please contact us directly.
          </p>
        </div>
      </div>

      {/* FAQ Categories */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-12">
          {faqCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-lg shadow p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 mb-4">
                {category.icon}
              </div>
              <h2 className="text-xl font-semibold mb-2">{category.title}</h2>
              <p className="text-gray-600 text-sm">
                {category.items.length} questions
              </p>
            </div>
          ))}
        </div>

        {/* FAQ Accordion Sections */}
        <div className="space-y-12 max-w-3xl mx-auto">
          {faqCategories.map((category, index) => (
            <div key={index}>
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3">
                  {category.icon}
                </div>
                <h2 className="text-2xl font-semibold">{category.title}</h2>
              </div>
              
              <div>
                {category.items.map((item, itemIndex) => (
                  <FAQAccordion 
                    key={itemIndex} 
                    question={item.question} 
                    answer={item.answer} 
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold mb-4">Still have questions?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            If you couldn't find the answer to your question, please don't hesitate to contact our friendly team.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}