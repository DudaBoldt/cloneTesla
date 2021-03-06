import { useCallback ,useContext, useEffect } from "react";
import ModelsContext from "./ModelsContext";

export default function useModel(modelName: string){
  const { registerModels, unregisterModel, getModelByName } = useContext (ModelsContext)

  useEffect(() =>  () => unregisterModel(modelName), [
    modelName, unregisterModel
  ])

  const getModel = useCallback(() => getModelByName(modelName),[
    getModelByName, modelName  
  ])

  return {registerModels, getModel}

}