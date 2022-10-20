import {SUBMIT_FLIGHT, SUBMIT_FOOD,
        SUBMIT_CAR, SUBMIT_BUS,
        SUBMIT_TRAIN, SUBMIT_HOTEL,
        SUBMIT_DIET} from '../types/submits';

export const submitFlight=(formData)=>{
  console.log('submit FLIGHT action reached')
  console.log('here is the form data..')
  console.log(formData)
  return{
    type: SUBMIT_FLIGHT,
    payload:formData
  }
}

export const submitCar=(formData)=>{
  console.log('submit Car action reached')
  console.log('here is the form data..')
  console.log(formData)
  return{
    type: SUBMIT_CAR,
    payload:formData
  }
}

export const submitBus=(formData)=>{
  console.log('submit BUS action reached')
  console.log('here is the form data..')
  console.log(formData)
  return{
    type: SUBMIT_BUS,
    payload:formData
  }
}

export const submitTrain = (formData)=>{
  console.log('submit train action reached')
  console.log('here is the form data..')
  console.log(formData)
  return{
    type: SUBMIT_TRAIN,
    payload:formData
  }
}

export const submitHotel = (formData)=>{
  console.log('submit hotel action reached')
  console.log('here is the form data..')
  console.log(formData)
  return{
    type: SUBMIT_HOTEL,
    payload:formData
  }
}

export const submitFood=(formData)=>{
  console.log('submit FOOD action reached')
  console.log('here is the form data..')
  console.log(formData)
  return{
    type: SUBMIT_FOOD,
    payload:formData
  }
}
export const submitDiet=(formData)=>{
  console.log('submit diet action reached')
  console.log('here is the form data..')
  console.log(formData)
  return{
    type: SUBMIT_DIET,
    payload:formData
  }
}
