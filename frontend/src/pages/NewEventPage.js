import EventForm from "../components/EventForm";
import { json, redirect } from "react-router-dom";
function NewEventPage() {
  return <EventForm method='post' />;
}

export default NewEventPage;
export async function action({ request, params }) {
  const data = await request.formData();
  const eventData = {
    title: data.get("title"),
    image: data.get("image"),
    date: data.get("date"),
    description: data.get("description"),
  };
  const response = await fetch("http://localhost:3001/events", {
    method: "POST",
    body: JSON.stringify(eventData),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if(response.status === 422){
    return response;
  }
  if(!response.ok)
  {
    throw json({message:'Could not save event.'},{status:500});
  }

  return redirect('/events');
}
