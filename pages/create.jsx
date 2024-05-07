import RecordForm from "@/components/RecordForm";
import { defaultRecordValues } from "@/utils/constants";
import { createRecord } from "@/utils/recordsFunctions";
import { useRouter } from "next/router";
import React from 'react';

const Create = () => {
    const entry=defaultRecordValues;
    const router=useRouter();

    const onSubmit= async (data) => {
        try{
            const response=await createRecord(data);

        if(response){
            router.push("/");
        }

        }catch(error){
            console.log(error);
        }
    }
  return <RecordForm entry={entry} onSubmit={onSubmit} />;
  
};

export default Create;