import React, { useEffect, useState } from "react";
import { Page, Seo } from "../../plugins/gatsby-theme-portfolio-minimal";

export default function ProjectPage() {
//     const showNavigation = false;
//     const showFooter = false;
//     const [htmlContent, setHtmlContent] = useState("");

//     useEffect(() => {
//         // Fetch the helloworld.html file from the public folder
//         fetch("/baba/maskcaptioner.html")
//             .then((response) => {
//                 if (!response.ok) {
//                     throw new Error(`HTTP error! status: ${response.status}`);
//                 }
//                 return response.text();
//             })
//             .then((data) => {
//                 setHtmlContent(data); // Set the HTML content
//             })
//             .catch((error) => {
//                 console.error("Error fetching helloworld.html:", error);
//             });
//     }, []);

//     return (
//         <>
//         {/* <div dangerouslySetInnerHTML={{ __html: htmlContent }} /> */}
//             <Seo title="MaskCaptioner" />
//             <Page showNavigation={showNavigation} showFooter={showFooter}>
//                 <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
//             </Page>
//         </>
//     );
}