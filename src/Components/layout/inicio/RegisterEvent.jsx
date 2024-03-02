import { useEffect, useState } from "react";
import { Global } from "../../../Helpers/Global";
import loadingIcon from '../../../assets/icons/loading.gif'
export const RegisterEvent = () => {
  const [form, setForm] = useState({});
  const [picture, setPicture] = useState();
  const [statusUpload, setStatusUpload] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setStatusUpload(false);
  }, []);

  const changeForm = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
    console.log(form);
  };

  const changePicture = async (e) => {
    const file = e.target.files[0];
    setPicture(file);

    // Reading the picture
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (e) => {
      // Do something with the readable picture if needed
    };
  };

  const uploadPicture = async () => {
    try {
      let formData = new FormData();
      formData.append("upload_preset", 'xxfbtujf');
      formData.append("file", picture);

      const res = await fetch(
        "https://api.cloudinary.com/v1_1/dcke5pwh4/image/upload",
        {
          method: 'POST',
          body: formData,
        }
      );

      if (!res.ok) {
        throw new Error(`Failed to upload picture. Status: ${res.status}`);
      }

      const data = await res.json();
      setLoading(false)
      return data;
    } catch (error) {
      console.error("Error uploading picture:", error.message);
      return null;
    }
  };

  const newEvent = async (e) => {
    setLoading(true);
    e.preventDefault();
    if (picture) {
      console.log('exist');
      const upload = await uploadPicture();
      if (upload) {
        setForm({
          ...form,
          picture: upload.secure_url,
        });
        setStatusUpload(true);
      }
      console.log('form', form);
    }
  };

  useEffect(() => {
    const sendFormToBackend = async () => {
      try {
        const res = await fetch(Global.url + 'event/register', {
          method: 'POST',
          body: JSON.stringify(form),
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!res.ok) {
          throw new Error(`Failed to register event. Status: ${res.status}`);
        }

        const data = await res.json();
        console.log(data);
      } catch (error) {
        console.error("Error registering event:", error.message);
      }
    };

    if (statusUpload) {
      sendFormToBackend();
    }
  }, [statusUpload, form]);

  return (
    <article className="container_registerEvent">
      <div className="container_form_event">
        
      <h1>Register</h1>
      <span>Crea un nuevo evento</span>
        <form>
          <input type="text" name="title" onChange={changeForm} className="input_titleEvent" placeholder="Ttulo del evento"/>
          <input type="datetime-local" name="date" onChange={changeForm} />
          <input type="text" name="location" onChange={changeForm} placeholder="Ciudad del evento"/>
          <textarea name="description" cols="30" rows="10" onChange={changeForm} placeholder="Descripción del evento"></textarea>
          <br />
          <input
            type="file"
            name="picture"
            accept="image/png,image/jpeg,image/webp"
            onChange={changePicture}
          />
          {loading ? <button className="btn_new_event button-donar" ><img src={loadingIcon} className="loadingIcon"></img></button> :
          <button className="btn_new_event button-donar" onClick={newEvent}>SUBIR</button>}
        </form>
      </div>

    </article>
  );
};


