// import React from "react";
// import "./Explore.css";
// import Footer from "../../Footer.jsx";

// const ExplorePage = () => {
//     return (
//         <div className="k111">
//         <div className="explore-container">
//             <h1 className="explore-title">Explore</h1>
//             <p className="intro-text">Explore how various factors affect carbon emissions and discover strategies to reduce them.</p>
            
//             <section className="section">
//                 <h2 className="section-title">1. Energy Production</h2>
//                 <h3 className="subsection-title">Factors Affecting Emissions:</h3>
//                 <ul className="list">
//                     <li>Fossil Fuels: Burning coal, oil, and natural gas for energy releases significant CO2.</li>
//                     <li>Renewable Sources: Wind, solar, and hydro produce minimal direct CO2 emissions but involve some emissions in production and installation.</li>
//                     <li>Energy Efficiency: Inefficient energy systems waste resources and emit more CO2.</li>
//                 </ul>
//                 <h3 className="subsection-title">Reduction Strategies:</h3>
//                 <ul className="list">
//                     <li>Transition to Renewable Energy: Increase the use of wind, solar, hydro, and geothermal energy.</li>
//                     <li>Improve Energy Efficiency: Upgrade power plants, modernize the grid, and incorporate energy-saving technologies.</li>
//                     <li>Support Energy Storage Solutions: Invest in advanced storage technologies to manage renewable energy more effectively.</li>
//                 </ul>
//             </section>

//             <section className="section">
//                 <h2 className="section-title">2. Transportation</h2>
//                 <h3 className="subsection-title">Factors Affecting Emissions:</h3>
//                 <ul className="list">
//                     <li>Vehicle Emissions: Cars, trucks, and planes running on gasoline or diesel emit CO2.</li>
//                     <li>Electric Vehicles (EVs): EVs have lower emissions but depend on the source of electricity.</li>
//                     <li>Public Transit and Active Transportation: Lack of efficient public transit and biking infrastructure can increase reliance on personal vehicles.</li>
//                 </ul>
//                 <h3 className="subsection-title">Reduction Strategies:</h3>
//                 <ul className="list">
//                     <li>Adopt Electric Vehicles (EVs): Promote EVs through incentives and expand charging infrastructure.</li>
//                     <li>Promote Public Transportation: Invest in and improve public transit systems.</li>
//                     <li>Encourage Active Transportation: Develop biking and walking infrastructure to reduce reliance on cars.</li>
//                 </ul>
//             </section>

//             <section className="section">
//                 <h2 className="section-title">3. Industrial Processes</h2>
//                 <h3 className="subsection-title">Factors Affecting Emissions:</h3>
//                 <ul className="list">
//                     <li>Fossil Fuels: Industrial processes often use fossil fuels, emitting CO2.</li>
//                     <li>Carbon-Intensive Processes: Certain industrial processes, like cement production, release CO2 as a byproduct.</li>
//                     <li>Energy Inefficiency: Inefficient industrial equipment increases emissions.</li>
//                 </ul>
//                 <h3 className="subsection-title">Reduction Strategies:</h3>
//                 <ul className="list">
//                     <li>Implement Energy Efficiency Measures: Upgrade equipment and optimize processes to use less energy.</li>
//                     <li>Adopt Low-Carbon Technologies: Invest in carbon capture and storage (CCS) and low-carbon fuels.</li>
//                     <li>Promote Circular Economy Practices: Encourage recycling and reusing materials to reduce the need for raw material production.</li>
//                 </ul>
//             </section>

//             <section className="section">
//                 <h2 className="section-title">4. Agriculture</h2>
//                 <h3 className="subsection-title">Factors Affecting Emissions:</h3>
//                 <ul className="list">
//                     <li>Livestock Emissions: Methane from livestock and manure management contributes to emissions.</li>
//                     <li>Deforestation for Agriculture: Land clearing for farming releases CO2 and reduces carbon sequestration.</li>
//                     <li>Fertilizer Use: Synthetic fertilizers produce nitrous oxide, a potent greenhouse gas.</li>
//                 </ul>
//                 <h3 className="subsection-title">Reduction Strategies:</h3>
//                 <ul className="list">
//                     <li>Adopt Sustainable Farming Practices: Use techniques like conservation tillage and agroforestry.</li>
//                     <li>Reduce Deforestation: Implement policies and practices to protect and restore forests.</li>
//                     <li>Improve Fertilizer Use: Optimize fertilizer application to reduce nitrous oxide emissions.</li>
//                 </ul>
//             </section>

//             <section className="section">
//                 <h2 className="section-title">5. Deforestation and Land Use</h2>
//                 <h3 className="subsection-title">Factors Affecting Emissions:</h3>
//                 <ul className="list">
//                     <li>Loss of Carbon Sinks: Deforestation reduces the ability of forests to absorb CO2.</li>
//                     <li>Land Use Changes: Converting forests to other uses releases stored carbon and reduces carbon storage.</li>
//                 </ul>
//                 <h3 className="subsection-title">Reduction Strategies:</h3>
//                 <ul className="list">
//                     <li>Protect Existing Forests: Implement conservation measures to prevent illegal logging.</li>
//                     <li>Reforest and Afforest: Engage in tree planting and forest restoration projects.</li>
//                     <li>Promote Sustainable Land Use: Integrate conservation and sustainable practices into land use planning.</li>
//                 </ul>
//             </section>

//             <section className="section">
//                 <h2 className="section-title">6. Building and Construction</h2>
//                 <h3 className="subsection-title">Factors Affecting Emissions:</h3>
//                 <ul className="list">
//                     <li>Energy Use: Buildings consume energy for heating, cooling, and lighting, contributing to emissions.</li>
//                     <li>Building Materials: Production of materials like concrete and steel is carbon-intensive.</li>
//                 </ul>
//                 <h3 className="subsection-title">Reduction Strategies:</h3>
//                 <ul className="list">
//                     <li>Adopt Green Building Standards: Implement certifications like LEED or BREEAM for energy-efficient and sustainable buildings.</li>
//                     <li>Retrofit Existing Buildings: Upgrade older buildings with energy-efficient systems.</li>
//                     <li>Use Low-Carbon Materials: Opt for materials with lower carbon footprints and incorporate recycled materials.</li>
//                 </ul>
//             </section>

//             <section className="section">
//                 <h2 className="section-title">7. Waste Management</h2>
//                 <h3 className="subsection-title">Factors Affecting Emissions:</h3>
//                 <ul className="list">
//                     <li>Landfills: Organic waste decomposes into methane in landfills.</li>
//                     <li>Waste Incineration: Burning waste releases CO2 and other pollutants.</li>
//                     <li>Waste Management Practices: Ineffective waste management can lead to higher emissions.</li>
//                 </ul>
//                 <h3 className="subsection-title">Reduction Strategies:</h3>
//                 <ul className="list">
//                     <li>Increase Recycling Rates: Enhance recycling programs and facilities.</li>
//                     <li>Expand Composting Programs: Implement composting for organic waste to reduce methane emissions.</li>
//                     <li>Improve Waste-to-Energy Technologies: Invest in technologies that capture and utilize methane while minimizing emissions.</li>
//                 </ul>
//             </section>

//             <section className="section">
//                 <h2 className="section-title">8. Consumer Behavior</h2>
//                 <h3 className="subsection-title">Factors Affecting Emissions:</h3>
//                 <ul className="list">
//                     <li>Lifestyle Choices: Dietary habits, energy use, and consumption patterns affect emissions.</li>
//                     <li>Waste Production: High levels of consumption and waste contribute to carbon footprints.</li>
//                 </ul>
//                 <h3 className="subsection-title">Reduction Strategies:</h3>
//                 <ul className="list">
//                     <li>Promote Sustainable Consumption: Educate consumers on low-carbon choices and support sustainable products.</li>
//                     <li>Encourage Reduced Waste: Advocate for reducing, reusing, and recycling.</li>
//                     <li>Support Local and Seasonal Products: Buy locally-produced and seasonal goods to cut transportation-related emissions.</li>
//                 </ul>
//             </section>

//             <section className="section">
//                 <h2 className="section-title">9. Economic and Policy Factors</h2>
//                 <h3 className="subsection-title">Factors Affecting Emissions:</h3>
//                 <ul className="list">
//                     <li>Carbon Pricing: Lack of carbon pricing can lead to higher emissions by not internalizing the cost of carbon.</li>
//                     <li>Subsidies and Regulations: Absence of incentives or regulations can slow the adoption of clean technologies.</li>
//                 </ul>
//                 <h3 className="subsection-title">Reduction Strategies:</h3>
//                 <ul className="list">
//                     <li>Implement Carbon Pricing: Introduce mechanisms like carbon taxes or cap-and-trade systems.</li>
//                     <li>Provide Incentives for Clean Technologies: Offer financial incentives for renewable energy and energy-efficient upgrades.</li>
//                     <li>Enforce Emission Regulations: Develop and enforce standards to limit emissions across sectors.</li>
//                 </ul>
//             </section>

//             <section className="section">
//                 <h2 className="section-title">10. Technological Advancements</h2>
//                 <h3 className="subsection-title">Factors Affecting Emissions:</h3>
//                 <ul className="list">
//                     <li>Innovation in Energy Technologies: Limited advancements can slow the transition to low-carbon solutions.</li>
//                     <li>Grid Modernization: Outdated grids can hinder the integration of renewable energy sources.</li>
//                 </ul>
//                 <h3 className="subsection-title">Reduction Strategies:</h3>
//                 <ul className="list">
//                     <li>Invest in Research and Development: Support the development of new technologies for reducing emissions.</li>
//                     <li>Promote Technology Transfer: Facilitate the sharing of clean technologies globally.</li>
//                     <li>Enhance Grid Modernization: Upgrade grids to better incorporate and manage renewable energy.</li>
//                 </ul>
//             </section>

//             <section className="section">
//                 <h2 className="section-title">11. Climate and Geography</h2>
//                 <h3 className="subsection-title">Factors Affecting Emissions:</h3>
//                 <ul className="list">
//                     <li>Energy Demands: Climate influences energy needs for heating and cooling.</li>
//                     <li>Natural Carbon Sinks: Geographic variations affect the capacity for carbon sequestration.</li>
//                 </ul>
//                 <h3 className="subsection-title">Reduction Strategies:</h3>
//                 <ul className="list">
//                     <li>Adapt Energy Strategies to Climate: Develop energy solutions tailored to regional climate conditions.</li>
//                     <li>Protect and Enhance Natural Carbon Sinks: Support conservation and restoration of ecosystems that sequester carbon.</li>
//                     <li>Encourage Climate-Resilient Infrastructure: Design infrastructure to withstand climate impacts and reduce emissions.</li>
//                 </ul>
//             </section>

            
//             </div>
//             <Footer />
//             </div>
//     );
    // };
    import React, { useEffect } from "react";
    import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
    import "./Explore.css";
    import Footer from "../../Footer.jsx";
    
    // ScrollToTop Component
    const ScrollToTop = () => {
        const { pathname } = useLocation();
    
        useEffect(() => {
            window.scrollTo(0, 0); // Scroll to the top of the page
        }, [pathname]);
    
        return null;
    };
    
    // ExplorePage Component
    const ExplorePage = () => {
        useEffect(() => {
            window.scrollTo(0, 0); // Ensure the page scrolls to the top when this component mounts
        }, []);
    
        return (
            <div className="k111">
                <div className="explore-container">
                    <h1 className="explore-title">Explore</h1>
                    <p className="intro-text">
                        Explore how various factors affect carbon emissions and discover strategies to reduce them.
                    </p>
                    
                    <section className="section">
                        <h2 className="section-title">1. Energy Production</h2>
                        <h3 className="subsection-title">Factors Affecting Emissions:</h3>
                        <ul className="list">
                            <li>Fossil Fuels: Burning coal, oil, and natural gas for energy releases significant CO2.</li>
                            <li>Renewable Sources: Wind, solar, and hydro produce minimal direct CO2 emissions but involve some emissions in production and installation.</li>
                            <li>Energy Efficiency: Inefficient energy systems waste resources and emit more CO2.</li>
                        </ul>
                        <h3 className="subsection-title">Reduction Strategies:</h3>
                        <ul className="list">
                            <li>Transition to Renewable Energy: Increase the use of wind, solar, hydro, and geothermal energy.</li>
                            <li>Improve Energy Efficiency: Upgrade power plants, modernize the grid, and incorporate energy-saving technologies.</li>
                            <li>Support Energy Storage Solutions: Invest in advanced storage technologies to manage renewable energy more effectively.</li>
                        </ul>
                    </section>


               <section className="section">
                 <h2 className="section-title">2. Transportation</h2>
                 <h3 className="subsection-title">Factors Affecting Emissions:</h3>
                 <ul className="list">
                     <li>Vehicle Emissions: Cars, trucks, and planes running on gasoline or diesel emit CO2.</li>
                     <li>Electric Vehicles (EVs): EVs have lower emissions but depend on the source of electricity.</li>
                    <li>Public Transit and Active Transportation: Lack of efficient public transit and biking infrastructure can increase reliance on personal vehicles.</li>
                </ul>
                <h3 className="subsection-title">Reduction Strategies:</h3>
                 <ul className="list">
                    <li>Adopt Electric Vehicles (EVs): Promote EVs through incentives and expand charging infrastructure.</li>
                     <li>Promote Public Transportation: Invest in and improve public transit systems.</li>
                     <li>Encourage Active Transportation: Develop biking and walking infrastructure to reduce reliance on cars.</li>
                 </ul>
             </section>

            <section className="section">
                <h2 className="section-title">3. Industrial Processes</h2>
                 <h3 className="subsection-title">Factors Affecting Emissions:</h3>
                 <ul className="list">
                     <li>Fossil Fuels: Industrial processes often use fossil fuels, emitting CO2.</li>
                     <li>Carbon-Intensive Processes: Certain industrial processes, like cement production, release CO2 as a byproduct.</li>
                     <li>Energy Inefficiency: Inefficient industrial equipment increases emissions.</li>
                 </ul>
                 <h3 className="subsection-title">Reduction Strategies:</h3>
                 <ul className="list">
                     <li>Implement Energy Efficiency Measures: Upgrade equipment and optimize processes to use less energy.</li>
                     <li>Adopt Low-Carbon Technologies: Invest in carbon capture and storage (CCS) and low-carbon fuels.</li>
                     <li>Promote Circular Economy Practices: Encourage recycling and reusing materials to reduce the need for raw material production.</li>
                 </ul>
             </section>

             <section className="section">
                 <h2 className="section-title">4. Agriculture</h2>
                 <h3 className="subsection-title">Factors Affecting Emissions:</h3>
                 <ul className="list">
                     <li>Livestock Emissions: Methane from livestock and manure management contributes to emissions.</li>
                     <li>Deforestation for Agriculture: Land clearing for farming releases CO2 and reduces carbon sequestration.</li>
                     <li>Fertilizer Use: Synthetic fertilizers produce nitrous oxide, a potent greenhouse gas.</li>
              </ul>
                 <h3 className="subsection-title">Reduction Strategies:</h3>
                 <ul className="list">
                     <li>Adopt Sustainable Farming Practices: Use techniques like conservation tillage and agroforestry.</li>
                     <li>Reduce Deforestation: Implement policies and practices to protect and restore forests.</li>
                     <li>Improve Fertilizer Use: Optimize fertilizer application to reduce nitrous oxide emissions.</li>
               </ul>
             </section>

             <section className="section">
                 <h2 className="section-title">5. Deforestation and Land Use</h2>
                 <h3 className="subsection-title">Factors Affecting Emissions:</h3>
                 <ul className="list">
                     <li>Loss of Carbon Sinks: Deforestation reduces the ability of forests to absorb CO2.</li>
                     <li>Land Use Changes: Converting forests to other uses releases stored carbon and reduces carbon storage.</li>
                 </ul>
                 <h3 className="subsection-title">Reduction Strategies:</h3>
                <ul className="list">
                     <li>Protect Existing Forests: Implement conservation measures to prevent illegal logging.</li>
                     <li>Reforest and Afforest: Engage in tree planting and forest restoration projects.</li>
                     <li>Promote Sustainable Land Use: Integrate conservation and sustainable practices into land use planning.</li>
                </ul>
             </section>

             <section className="section">
                 <h2 className="section-title">6. Building and Construction</h2>
                 <h3 className="subsection-title">Factors Affecting Emissions:</h3>
                 <ul className="list">
                     <li>Energy Use: Buildings consume energy for heating, cooling, and lighting, contributing to emissions.</li>
                     <li>Building Materials: Production of materials like concrete and steel is carbon-intensive.</li>
                 </ul>
                 <h3 className="subsection-title">Reduction Strategies:</h3>
                 <ul className="list">
                     <li>Adopt Green Building Standards: Implement certifications like LEED or BREEAM for energy-efficient and sustainable buildings.</li>
                    <li>Retrofit Existing Buildings: Upgrade older buildings with energy-efficient systems.</li>
                     <li>Use Low-Carbon Materials: Opt for materials with lower carbon footprints and incorporate recycled materials.</li>
                 </ul>
             </section>

             <section className="section">
                 <h2 className="section-title">7. Waste Management</h2>
                 <h3 className="subsection-title">Factors Affecting Emissions:</h3>
                 <ul className="list">
                     <li>Landfills: Organic waste decomposes into methane in landfills.</li>
                     <li>Waste Incineration: Burning waste releases CO2 and other pollutants.</li>
                     <li>Waste Management Practices: Ineffective waste management can lead to higher emissions.</li>
                 </ul>
                 <h3 className="subsection-title">Reduction Strategies:</h3>
                 <ul className="list">
                     <li>Increase Recycling Rates: Enhance recycling programs and facilities.</li>
                     <li>Expand Composting Programs: Implement composting for organic waste to reduce methane emissions.</li>
                     <li>Improve Waste-to-Energy Technologies: Invest in technologies that capture and utilize methane while minimizing emissions.</li>
                 </ul>
             </section>

             <section className="section">
                 <h2 className="section-title">8. Consumer Behavior</h2>
                 <h3 className="subsection-title">Factors Affecting Emissions:</h3>
                 <ul className="list">
                     <li>Lifestyle Choices: Dietary habits, energy use, and consumption patterns affect emissions.</li>
                     <li>Waste Production: High levels of consumption and waste contribute to carbon footprints.</li>
                 </ul>
                 <h3 className="subsection-title">Reduction Strategies:</h3>
                 <ul className="list">
                     <li>Promote Sustainable Consumption: Educate consumers on low-carbon choices and support sustainable products.</li>
                    <li>Encourage Reduced Waste: Advocate for reducing, reusing, and recycling.</li>
                     <li>Support Local and Seasonal Products: Buy locally-produced and seasonal goods to cut transportation-related emissions.</li>
                 </ul>
             </section>

             <section className="section">
                 <h2 className="section-title">9. Economic and Policy Factors</h2>
                 <h3 className="subsection-title">Factors Affecting Emissions:</h3>
                 <ul className="list">
                     <li>Carbon Pricing: Lack of carbon pricing can lead to higher emissions by not internalizing the cost of carbon.</li>
                     <li>Subsidies and Regulations: Absence of incentives or regulations can slow the adoption of clean technologies.</li>
                 </ul>
                 <h3 className="subsection-title">Reduction Strategies:</h3>
                 <ul className="list">
                     <li>Implement Carbon Pricing: Introduce mechanisms like carbon taxes or cap-and-trade systems.</li>
                    <li>Provide Incentives for Clean Technologies: Offer financial incentives for renewable energy and energy-efficient upgrades.</li>
                     <li>Enforce Emission Regulations: Develop and enforce standards to limit emissions across sectors.</li>
                 </ul>
             </section>

            <section className="section">
                 <h2 className="section-title">10. Technological Advancements</h2>
               <h3 className="subsection-title">Factors Affecting Emissions:</h3>
                 <ul className="list">
                     <li>Innovation in Energy Technologies: Limited advancements can slow the transition to low-carbon solutions.</li>
                     <li>Grid Modernization: Outdated grids can hinder the integration of renewable energy sources.</li>
                 </ul>
                 <h3 className="subsection-title">Reduction Strategies:</h3>
                 <ul className="list">
                     <li>Invest in Research and Development: Support the development of new technologies for reducing emissions.</li>
                     <li>Promote Technology Transfer: Facilitate the sharing of clean technologies globally.</li>
                     <li>Enhance Grid Modernization: Upgrade grids to better incorporate and manage renewable energy.</li>
                 </ul>
             </section>
    
                    {/* Include additional sections here */}
    
                    <section className="section">
                        <h2 className="section-title">11. Climate and Geography</h2>
                        <h3 className="subsection-title">Factors Affecting Emissions:</h3>
                        <ul className="list">
                            <li>Energy Demands: Climate influences energy needs for heating and cooling.</li>
                            <li>Natural Carbon Sinks: Geographic variations affect the capacity for carbon sequestration.</li>
                        </ul>
                        <h3 className="subsection-title">Reduction Strategies:</h3>
                        <ul className="list">
                            <li>Adapt Energy Strategies to Climate: Develop energy solutions tailored to regional climate conditions.</li>
                            <li>Protect and Enhance Natural Carbon Sinks: Support conservation and restoration of ecosystems that sequester carbon.</li>
                            <li>Encourage Climate-Resilient Infrastructure: Design infrastructure to withstand climate impacts and reduce emissions.</li>
                        </ul>
                    </section>
    
                    
                </div>
                <Footer />
            </div>
        );
    };

export default ExplorePage;
