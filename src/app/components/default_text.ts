import { listSurveyResponses } from 'src/graphql/queries';

let high_risk = {
  title: "High Risk for Emotional, Attentional, or Behavioral Difficulties",
  paragraph_one: "Your results indicate that the child is experiencing a large number of emotional, attentional, or behavioral difficulties. Based on your answers, living with these feelings and stressors is likely causing your child difficulty in school, with relationships, in your family, and/or with everyday activities.",
  paragraph_two: "These results do not mean that the child has a mental illness. But, if you haven’t already done so, now is great time to start a conversation with your child about how to deal with the many hard feelings, stresses, or problem behaviors that you reported. Seek extra help from a counselor if needed. Thank you"
}

let medium_risk = {
  title: "Medium Risk for Emotional, Attentional, or Behavioral Difficulties",
  paragraph_one: "",
  paragraph_two: ""
}

let low_risk = {
  title: "Low Risk for Emotional, Attentional, or Behavioral Difficulties",
  paragraph_one: "Your results indicate that this child has none, or very few signs of emotional, attentional or behavioral difficulties. Most youth scoring in this range are functioning well and do not have serious problems.",
  paragraph_two: "If you are still concerned about this child's mental health regardless of this response, please make a note to fill out this survey as often as necessary. Seek extra help from a counselor if needed. Thank you"
}

export const responses = new Map<String, any>();
responses.set("High", high_risk);
responses.set("Medium", medium_risk);
responses.set("Low", high_risk);



let bad_history = {
  title: "Student has been showing signs of depression for a little while",
  paragraph_one: "Some info about the students history",
  paragraph_two: "A suggestion about what they should do"
}

export const histories = new Map<String, any>();
histories.set('bad', bad_history);
