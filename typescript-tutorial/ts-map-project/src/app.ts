import axios from "axios";

const form = document.querySelector("form")! as HTMLFormElement;
const addressIn = document.getElementById("address")! as HTMLInputElement;

const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;
type googleGeocodingRes = {
  results: { geometry: { location: { lat: number; lng: number } } }[];
  status: "OK" | "ZERO_RESULTS";
};

// declare var google: any;

const searchAddressHandler = async (e: Event) => {
  e.preventDefault();
  const enteredAddress = addressIn.value;

  try {
    const res = await axios.get<googleGeocodingRes>(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(
        enteredAddress
      )}&key=${GOOGLE_API_KEY}`
    );

    if (res.data.status !== "OK") {
      throw new Error("Could not fetch location!");
    }

    const coordinates = res.data.results[0].geometry.location;

    const map = new google.maps.Map(document.getElementById("map")!, {
      center: coordinates,
      zoom: 16,
    });

    new google.maps.Marker({
      position: coordinates,
      map: map,
    });
  } catch (err) {
    alert(err.message);
    console.log(err);
  }
};

form.addEventListener("submit", searchAddressHandler.bind(this));
