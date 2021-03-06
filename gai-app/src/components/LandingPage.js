import React from 'react'
import Author from './Author'
import "../Style/Home.scss"


//brief intro of the authors work 
// imports the author personal ino from another component 
//  anchor tag to the official articles 

function LandingPage(){
    return(
        <div id='landing-page-main-div'>  
            <Author />
            <div id="summary-title-landing-page-div">
                <h1 id='title-landing-page'> 
                    Governing Artificial Intelligence:Upholding Human Rights & Dignity
                </h1>
                    <p id="summary-landing-page-p">"Can international human rights help guide and govern artificial intelligence (AI)?
                        Currently, much of society is uncertain about the real human impacts of AI systems.
                        Amid hopes that AI can bring forth “global good” there is evidence that some AI systems 
                        are already violating fundamental rights and freedoms. As stakeholders look for
                        a North Star to guide AI development, we can rely on human rights to help chart the
                        course ahead. International human rights are a powerful tool for identifying, preventing, 
                        and redressing an important class of risks and harms. A human rights-based
                        frame could provide those developing AI with the aspirational, normative, and legal
                        guidance to uphold human dignity and the inherent worth of every individual regardless 
                        of country or jurisdiction." - Mark Latonero
                     </p>
                     <a id="report-link" href="https://datasociety.net/wp-content/uploads/2018/10/DataSociety_Governing_Artificial_Intelligence_Upholding_Human_Rights.pdf">Click here to see complete report </a>
            </div>
          
        </div>
    )
}

export default  LandingPage;
