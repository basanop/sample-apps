// main.js
function callAlgorithm(){var e=document.getElementById("status-label");e.innerHTML="",startTask();var t=document.getElementById("repository").value;e.innerHTML="",Algorithmia.query("nlp/AnalyzeGithubReadme",Algorithmia.api_key,t,function(t,n){finishTask();if(t){e.innerHTML='<span class="text-danger">Failed:('+t+")</span>";return}parseScores(n),parseRecommendations(n)})}function parseRecommendations(e){updateLengthRecommentation(e.recommendation.length),updateCodeSampleRecommentation(e.recommendation.pre),updateImagesRecommentation(e.recommendation.img),insertHeadersRecommendations(e.recommendation.header),insertParagraphRecommendations(e.recommendation.paragraph)}function insertHeadersRecommendations(e){var t=document.getElementById("headers-recommendation-list");t.innerHTML="";var n=e;for(i=0;i<n.length;++i){var r=n[i].operation,s=n[i].value,o=document.createElement("div");o.className="media";var u=document.createElement("div");u.className="media-left operation",o.appendChild(u);var a=document.createElement("span");r=="insert"?a.className="glyphicon glyphicon-pencil":a.className="glyphicon glyphicon-remove",u.appendChild(a);var f=document.createElement("div");f.className="media-body";var l=document.createElement("h4");r=="insert"?l.innerHTML="Try adding a header to one of your sections with the stem: <span style='color:green;'>"+s+"</span>":l.innerHTML="Remove the header which starts with the stem: <span style='color:red;'>"+s+"</span>",f.appendChild(l),o.appendChild(f),t.appendChild(o)}}function insertParagraphRecommendations(e){var t=document.getElementById("paragraphs-recommendation-list");t.innerHTML="";var n=e;for(i=0;i<n.length;++i){var r=n[i].operation,s=n[i].value,o=document.createElement("div");o.className="media";var u=document.createElement("div");u.className="media-left operation",o.appendChild(u);var a=document.createElement("span");r=="insert"?a.className="glyphicon glyphicon-pencil":a.className="glyphicon glyphicon-remove",u.appendChild(a);var f=document.createElement("div");f.className="media-body";var l=document.createElement("h4");r=="insert"?l.innerHTML="Add words with the stem: <span style='color:green;'>"+s+"</span>":l.innerHTML="Remove words which start with the stem: <span style='color:red;'>"+s+"</span>",f.appendChild(l),o.appendChild(f),t.appendChild(o)}}function updateLengthRecommentation(e){var t=document.getElementById("length-recommendation-operation"),n=document.getElementById("length-recommendation-value");t.innerHTML="",n.innerHTML="";var r=document.createElement("span");if(e.length==0)r.className="glyphicon glyphicon-ok",n.innerHTML="Juuuust right! Then length of your README is neither too long nor too short.";else if(e[0].operation=="increase"){r.className="glyphicon glyphicon-pencil";var i="Cat got your tongue? Consider increasing the length of your README by "+e[0].value+" characters.";n.innerHTML=i}else if(e[0].operation=="decrease"){r.className="glyphicon glyphicon-remove";var i="Woof, it's a long one! Consider decreasing the length of your README by "+e[0].value+" characters.";n.innerHTML=i}else r.className="glyphicon glyphicon-ok",n.innerHTML="Juuuust right! Then length of your README is neither too long nor too short.";t.appendChild(r)}function updateCodeSampleRecommentation(e){var t=document.getElementById("code-recommendation-operation"),n=document.getElementById("code-recommendation-value");t.innerHTML="",n.innerHTML="";var r=document.createElement("span");if(e.length==0)r.className="glyphicon glyphicon-ok",n.innerHTML="Great work, your code samples are spot on!";else if(e[0].operation=="increase"){r.className="glyphicon glyphicon-pencil";var i="Have you thought about adding in code samples? We suggest "+e[0].value+"?";n.innerHTML=i}else if(e[0].operation=="decrease"){r.className="glyphicon glyphicon-remove";var i="You could probably cut down on code samples. How about removing "+e[0].value+"?";n.innerHTML=i}else r.className="glyphicon glyphicon-ok",n.innerHTML="Great work, your code samples are spot on!";t.appendChild(r)}function updateImagesRecommentation(e){var t=document.getElementById("images-recommendation-operation"),n=document.getElementById("images-recommendation-value");t.innerHTML="",n.innerHTML="";var r=document.createElement("span");if(e.length==0)r.className="glyphicon glyphicon-ok",n.innerHTML="No recommendations found for your README's image count. Good job!";else if(e[0].operation=="decrease"){r.className="glyphicon glyphicon-remove";var i="Consider decreasing the number of images by "+e[0].value;n.innerHTML=i}else if(e[0].operation=="increase"){r.className="glyphicon glyphicon-pencil";var i="Consider increasing the number of images by "+e[0].value;n.innerHTML=i}else r.className="glyphicon glyphicon-ok",n.innerHTML="No recommendations found for your README's image count. Good job!";t.appendChild(r)}function parseScores(e){var t=document.getElementsByClassName("length-score"),n=document.getElementsByClassName("headers-score"),r=document.getElementsByClassName("code-score"),i=document.getElementsByClassName("paragraph-score"),s=document.getElementsByClassName("image-score"),o=e.score,u=new Array(o.pre,o.header,o.length,o.paragraph,o.img),a=new Array(r,n,t,i,s);for(var f in a)insertGrade(a[f],u[f])}function insertGrade(e,t){var n=e,t=t;for(i=0;i<n.length;++i){var r=n[i];t>=9?(r.style.color="green",r.innerHTML="A+"):t==8?(r.style.color="green",r.innerHTML="A"):t==7||t==6?(r.style.color="green",r.innerHTML="B"):t==5?(r.style.color="orange",r.innerHTML="C"):t==4?(r.style.color="orange",r.innerHTML="C-"):t==3?r.innerHTML="D":t==2||t==1?r.innerHTML="F":(r.style.color="orange",r.innerHTML="C")}}function startTask(){numTasks++,document.getElementById("overlay").classList.remove("hidden")}function finishTask(){numTasks--,numTasks<=0&&document.getElementById("overlay").classList.add("hidden")}window.Algorithmia=window.Algorithmia||{},Algorithmia.api_key="simGpDplaouYGZhf2WGltne49SV1";var numTasks=0;