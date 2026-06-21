import React from "react";

function ScreenPreview() {

    const previews=[
        {
          img:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
          title:"Unified Dashboard ",
          desc:"Balance summary, expense charts, top categories and AI quick insights in one view."
        },
        {
          img:"https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=80",
          title:"AI Financial Advisory ",
          desc:"Personalized spending analysis, waste detection and smart saving opportunities."
        },
        {
          img:"https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
          title:"AI Chat Assistant ",
          desc:"Ask direct questions about budgeting, subscriptions, monthly planning and money control."
        }
    ]
  return (
    <>
      <section className="max-w-7xl mx-auto px-6 lg:px-10 pb-20">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Built Like A Complete Finance Operating System
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto leading-8">
           Every major financial activity is centralized into one smooth and responsive dashboard experience.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
            {
                previews.map((data,i)=>(
                    <div key={i} className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm hover:shadow-md hover:-translate-y-1 transition">

                        <div className="h-48 rounded-xl bg-gray-100 border border-gray-100 mb-6 overflow-hidden">
                            <img
                              src={data.img}
                              alt={data.title}
                              className="w-full h-full object-cover"
                            />
                        </div>

                        <h3 className="font-semibold text-lg mb-3">{data.title}</h3>
                        <p className="text-gray-500 text-sm leading-7">{data.desc}</p>
                    </div>
                ))
            }

        </div>    






      </section>
    </>
  );
}

export default ScreenPreview;
