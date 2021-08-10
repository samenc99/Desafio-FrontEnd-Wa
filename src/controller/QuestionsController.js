import api from "./api";

export default class QuestionsController{
  get = async(amount)=>{
    if(amount<1)throw new Error('Amount must be greater than 0')
    try{
      const res = await api.get(`?amount=${amount}`)
      return res.data.results
    }catch (err){
      throw new Error(err.message || 'Estamos com problemas internos, por favor tente novamente mais tarde.')
    }
  }
}