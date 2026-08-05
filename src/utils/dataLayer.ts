export function pushDataLayer(obj: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(obj);
}

export function pushCourseSelection({
  courseName,
  courseCategory,
  buttonLocation,
}: {
  courseName: string;
  courseCategory?: string;
  buttonLocation: string;
}) {
  pushDataLayer({
    event: "select_course",
    course_name: courseName,
    course_category: courseCategory || "",
    button_location: buttonLocation,
  });
}

export function pushContactClick({
  contactMethod,
  clickLocation,
  phoneNumber,
}: {
  contactMethod: string;
  clickLocation: string;
  phoneNumber?: string;
}) {
  pushDataLayer({
    event: "contact_click",
    contact_method: contactMethod,
    click_location: clickLocation,
    ...(phoneNumber ? { phone_number: phoneNumber } : {}),
  });
}

export function pushWhatsappClick({
  clickLocation,
}: {
  clickLocation: string;
}) {
  pushDataLayer({
    event: "contact_click",
    contact_method: "whatsapp",
    click_location: clickLocation,
  });
}

export function pushViewCourseDetail({
  courseId,
  courseName,
  courseCategory,
}: {
  courseId: string;
  courseName: string;
  courseCategory?: string;
}) {
  pushDataLayer({
    event: "view_course_detail",
    course_id: courseId,
    course_name: courseName,
    course_category: courseCategory || "",
  });
}

export function pushLeadFormSubmission({
  formType = "Inquiry / Demo Booking",
  fullName = "",
  mobileNumber = "",
  email = "",
  courseSelected = "",
  message = "",
  extra = {},
}: {
  formType?: string;
  fullName?: string;
  mobileNumber?: string;
  email?: string;
  courseSelected?: string;
  message?: string;
  extra?: Record<string, unknown>;
}) {
  pushDataLayer({
    event: "lead_form_submitted",
    form_type: formType,
    full_name: fullName,
    mobile_number: mobileNumber,
    email: email,
    course_selected: courseSelected,
    message: message,
    ...extra,
  });
}
