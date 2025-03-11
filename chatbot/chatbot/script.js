function chatbot(input) {
  input = input.toLowerCase().trim();
  const cleanInput = input.replace(/[^\w\s]/gi, "");

  let output = "";

  // Greetings
  if (cleanInput.includes("hello") || cleanInput.includes("hi")) {
    output = "Hello, nice to meet you!";
  } else if (cleanInput.includes("how are you")) {
    output = "I'm doing fine, thank you for asking.";
  } else if (cleanInput.includes("what is your name")) {
    output = "My name is En_Able Bot, I'm a chatbot.";
  } else if (cleanInput.includes("what can you do")) {
    output = "I can chat with you and answer some simple questions about En_Able.";
  } else if (cleanInput.includes("what is this platform about")) {
    output = "This platform is designed to assist people living with disabilities in finding employment and skill development opportunities.";
  }
  // General Platform FAQs
  else if (cleanInput.includes("how can i sign up")) {
    output = "You can sign up by clicking the 'Sign Up' button at the top-right corner and filling out the registration form.";
  } else if (cleanInput.includes("free to use") || cleanInput.includes("is it free")) {
    output = "Yes, our platform is free to use for all individuals seeking job opportunities and training resources.";
  } else if (cleanInput.includes("reset my password")) {
    output = "To reset your password, click the 'Forgot Password' link on the login page and follow the instructions.";
  } else if (cleanInput.includes("available worldwide")) {
    output = "Our service is available worldwide, though some job postings and training programs may be region-specific.";
  } else if (cleanInput.includes("contact support")) {
    output = "You can contact support by emailing support@inclusivemployment.com or using our live chat feature.";
  }
  // Job Search & Employment FAQs
  else if (cleanInput.includes("search for jobs")) {
    output = "You can search for jobs using the search bar on our homepage, filtering by job type, location, and accessibility needs.";
  } else if (cleanInput.includes("filter jobs") || cleanInput.includes("accessibility needs")) {
    output = "Use our advanced filter options to find jobs that match your specific accessibility requirements.";
  } else if (cleanInput.includes("apply for jobs")) {
    output = "Yes, you can apply directly through our platform by clicking on the job listing and following the application process.";
  } else if (cleanInput.includes("disability friendly") || cleanInput.includes("disabilityfriendly")) {
    output = "We certify employers who are committed to inclusivity. Look for the 'Disability-Friendly' badge on job postings.";
  } else if (cleanInput.includes("types of jobs")) {
    output = "We offer a wide range of job types including remote, part-time, full-time, internships, and apprenticeships.";
  } else if (cleanInput.includes("remote job")) {
    output = "Yes, many of our listings are remote opportunities that you can apply to from anywhere.";
  } else if (cleanInput.includes("upload my resume")) {
    output = "You can upload your resume in your profile settings after you log in.";
  } else if (cleanInput.includes("resume building") || cleanInput.includes("build my resume")) {
    output = "We offer resume-building assistance through our AI tools and professional templates.";
  } else if (cleanInput.includes("job alerts")) {
    output = "You can set up job alerts in your account settings to be notified when new jobs are posted.";
  }
  // Skill Development & Training FAQs
  else if (cleanInput.includes("training programs")) {
    output = "We offer a variety of training programs ranging from online courses to in-person workshops.";
  } else if (cleanInput.includes("free courses") || cleanInput.includes("courses free")) {
    output = "Many of our courses are free, and we also offer financial aid options for some programs.";
  } else if (cleanInput.includes("certificate") || cleanInput.includes("certification")) {
    output = "Yes, upon successful completion of a course, you can earn a certificate recognized by industry professionals.";
  } else if (cleanInput.includes("enroll") && cleanInput.includes("training program")) {
    output = "You can enroll by selecting the course you're interested in and clicking the 'Enroll' button.";
  } else if (cleanInput.includes("mentorship") && cleanInput.includes("program")) {
    output = "We offer mentorship programs to connect you with experienced professionals in your field.";
  } else if (cleanInput.includes("designed for my disability")) {
    output = "We offer specialized courses tailored to various disabilities. You can filter courses based on your needs.";
  } else if (cleanInput.includes("financial aid") || cleanInput.includes("grants")) {
    output = "We provide information on financial aid and grants available for training programs.";
  } else if (cleanInput.includes("on the job training") || cleanInput.includes("on-the-job training")) {
    output = "Yes, some of our partner companies offer on-the-job training programs.";
  }
  // Accessibility & Special Features FAQs
  else if (cleanInput.includes("accessible for visually impaired") || cleanInput.includes("screen readers")) {
    output = "Our website is fully accessible, with support for screen readers, high contrast mode, and text-to-speech options.";
  } else if (cleanInput.includes("voice commands")) {
    output = "Yes, you can navigate our site using voice commands if your device supports it.";
  } else if (cleanInput.includes("high contrast") || cleanInput.includes("text to speech")) {
    output = "You can enable high contrast mode and text-to-speech in your accessibility settings.";
  } else if (cleanInput.includes("easy to read") || cleanInput.includes("customize the font")) {
    output = "Yes, job descriptions and other content are available in easy-to-read formats, and you can customize the font size and colors.";
  } else if (cleanInput.includes("sign language interpreter")) {
    output = "Currently, we are working on adding a sign language interpreter feature. Please check back for updates.";
  }
  // Employer & Business Support FAQs
  else if (cleanInput.includes("post job listings") || cleanInput.includes("company post job")) {
    output = "Employers can post job listings by registering for an employer account and following the posting guidelines.";
  } else if (cleanInput.includes("certified as a disability friendly workplace") || cleanInput.includes("disability friendly workplace")) {
    output = "Companies can apply for our certification by submitting information about their inclusivity practices.";
  } else if (cleanInput.includes("hire employees")) {
    output = "Yes, our platform allows employers to directly hire candidates through our job application system.";
  } else if (cleanInput.includes("workplace accessible") || cleanInput.includes("making my workplace accessible")) {
    output = "We provide resources and guidelines on how to create an accessible workplace.";
  } else if (cleanInput.includes("inclusive hiring") || cleanInput.includes("hiring practices")) {
    output = "Yes, we offer training resources for employers on inclusive hiring practices.";
  } else if (cleanInput.includes("internships") || cleanInput.includes("apprenticeships")) {
    output = "Our platform also supports internships and apprenticeships to help you gain valuable experience.";
  } else if (cleanInput.includes("connect with candidates")) {
    output = "Employers can connect with candidates through our employer dashboard and candidate matching tools.";
  }
  // AI Career Coaching & Assistance FAQs
  else if (cleanInput.includes("ai career coach") || cleanInput.includes("career coach")) {
    output = "Our AI career coach uses advanced algorithms to provide personalized career advice.";
  } else if (cleanInput.includes("choose the right career") || cleanInput.includes("career path")) {
    output = "I can help guide you by suggesting career paths based on your skills and interests.";
  } else if (cleanInput.includes("feedback on my resume")) {
    output = "I can provide basic feedback on your resume. For a detailed analysis, please use our resume review tool.";
  } else if (cleanInput.includes("prepare for an interview")) {
    output = "I can offer tips and practice questions to help you prepare for your interview.";
  } else if (cleanInput.includes("disability friendly companies") || cleanInput.includes("companies hiring")) {
    output = "We feature a list of disability-friendly companies that are currently hiring.";
  } else if (cleanInput.includes("trending careers")) {
    output = "Some trending careers for people with disabilities include roles in technology, customer service, and creative industries.";
  }
  // Community & Support FAQs
  else if (cleanInput.includes("connect with other job seekers") || cleanInput.includes("community")) {
    output = "Yes, we have an online community forum where you can connect with other job seekers.";
  } else if (cleanInput.includes("share my success story")) {
    output = "You can share your success story by posting it in our community section.";
  } else if (cleanInput.includes("legal advice") || cleanInput.includes("workplace discrimination")) {
    output = "While I cannot provide legal advice, I can connect you with resources and organizations that offer legal support.";
  } else if (cleanInput.includes("report an issue") || cleanInput.includes("issue with an employer")) {
    output = "If you encounter an issue with an employer, please report it through our support page.";
  } else if (cleanInput.includes("mentorship programs available")) {
    output = "Yes, we offer mentorship programs to help you navigate your career path.";
  }
  // Government & NGO Support FAQs
  else if (cleanInput.includes("government programs") || cleanInput.includes("disability programs")) {
    output = "We provide information on various government programs and disability support services.";
  } else if (cleanInput.includes("financial aid") || cleanInput.includes("grants")) {
    output = "Yes, you can find details on grants and financial aid for training and employment on our platform.";
  } else if (cleanInput.includes("disability benefits") || cleanInput.includes("benefits information")) {
    output = "Our platform offers up-to-date information on disability benefits and related support.";
  } else if (cleanInput.includes("workplace accommodations")) {
    output = "You can apply for workplace accommodations by contacting your employer or checking our resource section.";
  } else if (cleanInput.includes("disability rights") || cleanInput.includes("employment laws")) {
    output = "We provide links and resources on disability rights and employment laws across different regions.";
  }
  // Business & Entrepreneurship FAQs
  else if (cleanInput.includes("start my own business") || cleanInput.includes("entrepreneur")) {
    output = "We offer guidance and resources for starting your own business, including mentorship and funding opportunities.";
  } else if (cleanInput.includes("funding opportunities") || cleanInput.includes("disabled entrepreneurs")) {
    output = "There are several funding opportunities available for disabled entrepreneurs. Check our business support section for details.";
  } else if (cleanInput.includes("mentorship for my startup")) {
    output = "You can sign up for our startup mentorship program to receive personalized guidance.";
  } else if (cleanInput.includes("best businesses for people with disabilities")) {
    output = "We provide a curated list of business ideas and opportunities tailored for people with disabilities.";
  } else if (cleanInput.includes("training for entrepreneurship")) {
    output = "Yes, we offer training programs specifically designed for entrepreneurship.";
  }
  // Default response if nothing matches
  else {
    output = "Sorry, I don't understand that. Please try something else.";
  }
  return output;
}


 
  function displayUserMessage(message) {
    let chat = document.getElementById("chat");
    let userMessage = document.createElement("div");
    userMessage.classList.add("message");
    userMessage.classList.add("user");
    let userAvatar = document.createElement("div");
    userAvatar.classList.add("avatar");
    let userText = document.createElement("div");
    userText.classList.add("text");
    userText.innerHTML = message;
    userMessage.appendChild(userAvatar);
    userMessage.appendChild(userText);
    chat.appendChild(userMessage);
    chat.scrollTop = chat.scrollHeight;
  }

  // Display the bot message on the chat
  function displayBotMessage(message) {
    let chat = document.getElementById("chat");
    let botMessage = document.createElement("div");
    botMessage.classList.add("message");
    botMessage.classList.add("bot");
    let botAvatar = document.createElement("div");
    botAvatar.classList.add("avatar");
    let botText = document.createElement("div");
    botText.classList.add("text");
    botText.innerHTML = message;
    botMessage.appendChild(botAvatar);
    botMessage.appendChild(botText);
    chat.appendChild(botMessage);
    chat.scrollTop = chat.scrollHeight;
  }

  // Send the user message and get the bot response
  function sendMessage() {
    let input = document.getElementById("input").value;
    if (input) {
      displayUserMessage(input);
      let output = chatbot(input);
      setTimeout(function() {
        displayBotMessage(output);
      }, 1000);
      document.getElementById("input").value = "";
    }
  }

  // Add a click event listener to the button
  document.getElementById("button").addEventListener("click", sendMessage);

  // Add a keypress event listener to the input
  document.getElementById("input").addEventListener("keypress", function(event) {
    if (event.keyCode == 13) {
      sendMessage();
    }
  });