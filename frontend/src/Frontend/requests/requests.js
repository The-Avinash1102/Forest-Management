import axios from 'axios'

const fetchAnimalDataURI = 'http://127.0.0.1:5000/Animals/Entry';
const SetPlantDataURI = 'http://127.0.0.1:5000//Plant/Register';
const fetchPlantDataURI = 'http://127.0.0.1:5000/Plant/Entry';
const SetAnimalsDataURI = 'http://127.0.0.1:5000//Animals/Register';



export const fetchAnimalData = async (setAnimals) => {
    try {
      const response = await axios.get(fetchAnimalDataURI);
      setAnimals(response.data.response);
      console.log(response.data.response);
    } 
    catch (error) {
      console.error('Error fetching animals:', error);
    }
};

export const SetPlantData= async (data)=>{
    try{
    axios.post(SetPlantDataURI,data);
    }
    catch(error){
        console.error('Error fetching plants:',error);
    }
};

export const SetAnimalData= async (data)=>{
    try{
    axios.post(SetAnimalsDataURI,data);
    }
    catch(error){
        console.error('Error fetching animals:',error);
    }
};

export const fetchPlantData = async (setPlants) => {
    try {
      const response = await axios.get(fetchPlantDataURI);
      console.log(response.data);
      setPlants(response.data.response);
      console.log(response.data.response);
      console.log("i exist");
    } 
    catch (error) {
      console.error('Error fetching plants:', error);
    }
};