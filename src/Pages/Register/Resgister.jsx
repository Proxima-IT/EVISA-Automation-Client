import React, { useContext, useState } from 'react';
import { NavLink, useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Authentication/AuthContext';
import axios from 'axios';

const Register = () => {
  const { handleRegister, handleUpdateProfile, setUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const [profileImage, setProfileImage] = useState('');
  const [uploading, setUploading] = useState(false);

  const handleRegistration = async (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    // Validation
    if (!name || !email || !password || !profileImage) {
      toast.error('You must fill in all the fields including uploading an image!');
      return;
    }
    if (password.length < 6) {
      toast.error('Password must be at least 6 characters long.');
      return;
    }
    if (!/[A-Z]/.test(password)) {
      toast.error('Password must have at least one Upper case letter.');
      return;
    }
    if (!/[a-z]/.test(password)) {
      toast.error('Password must have at least one Lower case letter.');
      return;
    }

    try {
      const result = await handleRegister(email, password);
      const user = result.user;

      await handleUpdateProfile({ displayName: name, photoURL: profileImage });

      setUser({ ...user, displayName: name, photoURL: profileImage });

      toast.success("You've successfully created an account!");
      setTimeout(() => {
        navigate('/');
      }, 1500);
      form.reset();
      setProfileImage('');
    } catch (error) {
      console.error(error);
      toast.error("You've put invalid credentials. Please try again.");
    }
  };

  const handlePhotoUpload = async (e) => {
    const image = e.target.files[0];
    if (!image) return;

    setUploading(true);

    try {
      const formData = new FormData();
      formData.append('image', image);

      const imageUploadUrl = `https://api.imgbb.com/1/upload?key=${
        import.meta.env.VITE_image_key_api
      }`;

      const res = await axios.post(imageUploadUrl, formData);
      setProfileImage(res.data.data.url);
      toast.success('Image uploaded successfully!');
    } catch (err) {
      console.error(err);
      toast.error('Image upload failed, try again.');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="hero mb-20 mt-10">
      <div className="hero-content rounded-3xl mt-30 flex-col justify-evenly lg:flex-row">
        <div className="flex flex-col lg:flex-row justify-center items-center p-2 rounded-2xl w-full shadow-2xl">
          <div className="p-6 flex flex-col max-w-lg rounded-2xl sm:p-10 text-gray-800">
            <div className="mb-4 text-center">
              <h1 className="my-3 text-4xl font-bold underline">Register</h1>
              <p className="text-lg dark:text-gray-600">
                Create an Account to Continue
              </p>
              <div className="divider"></div>
            </div>
            <form onSubmit={handleRegistration} className="space-y-8">
              <div className="space-y-2 text-2xl">
                <div>
                  <label htmlFor="name" className="block mb-2 text-2xl">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter Name"
                    className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-2xl">
                    Enter Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter email"
                    className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                  />
                </div>
                <div>
                  <label htmlFor="photo" className="block mb-2 text-2xl">
                    Upload Photo
                  </label>
                  <input
                    onChange={handlePhotoUpload}
                    type="file"
                    name="photo"
                    id="photo"
                    accept="image/*"
                    className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 text-lg"
                  />
                  {uploading && <p className="text-sm text-blue-600">Uploading...</p>}
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <label htmlFor="password" className="text-2xl">
                      Enter Password
                    </label>
                  </div>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Enter password"
                    className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <div>
                  <button
                    type="submit"
                    disabled={uploading}
                    className="cursor-pointer w-full px-8 py-3 text-2xl font-semibold rounded-md bg-white text-[#2D336B] border-2 border-[#2D336B] disabled:opacity-50"
                  >
                    {uploading ? 'Please wait...' : 'Register'}
                  </button>
                </div>

                <div className="divider"></div>
                <p className="px-6 text-xl text-center dark:text-gray-600">
                  Already Have An Account?
                  <NavLink className="underline text-[#2D336B]" to="/login">
                    {' '}
                    Login here
                  </NavLink>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
