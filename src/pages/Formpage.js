import React, { useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, addDoc, collection } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD2dwRIeyCYuuzaJp-X7fhLG2BgxKTKmyw",
    authDomain: "personaprep.firebaseapp.com",
    projectId: "personaprep",
    storageBucket: "personaprep.appspot.com",
    messagingSenderId: "354960676583",
    appId: "1:354960676583:web:ec1ec916c704eb32d47442",
    measurementId: "G-XQCCNKTXR1"
  };

function FormPage() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const handleFirstNameChange = (e) => {
        setFirstName(e.target.value);
    };

    const handleLastNameChange = (e) => {
        setLastName(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Handle form submission logic here
        const app = initializeApp(firebaseConfig);
        const db = getFirestore(app);

        try {
            const docRef = await addDoc(collection(db, 'personaprep'), {
                firstName: firstName,
                lastName: lastName
            });

            console.log('Data added to Firestore with ID:', docRef.id);
        } catch (error) {
            console.error('Error adding data to Firestore: ', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                First Name:
                <input type="text" value={firstName} onChange={handleFirstNameChange} />
            </label>
            <br />
            <label>
                Last Name:
                <input type="text" value={lastName} onChange={handleLastNameChange} />
            </label>
            <br />
            <button type="submit">Submit</button>
        </form>
    );
}

export default FormPage;
