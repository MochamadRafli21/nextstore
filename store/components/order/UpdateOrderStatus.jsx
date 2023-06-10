'use client'
import React,{useState, useTransition} from 'react'
import SingleSelect from '../select/singleSelect'
import { updateOrderStatus } from '@/app/store/order'
import { useRouter } from 'next/navigation'
function UpdateOrderStatus({orderId ,currentStatus}) {
  const router = useRouter()  
  const [isPending, startTransition] = useTransition();
  const [isFetching, setIsFetching] = useState(false);
  const isMutating = isFetching || isPending;

  const statusList = [{name: 'draft'}, {name: 'confirm'}, {name: 'shipped'}, {name: 'completed'}]
  const [selectedStatus, setselectedStatus] = useState(currentStatus)
  const updateStatusSubmit = (status)=>{
    const update = async()=>{
      setIsFetching(true);
      await updateOrderStatus(orderId, {status:status.toUpperCase()})
      setIsFetching(false);
      startTransition(() => {
      router.refresh();
      });
      setselectedStatus(status)
    }
    update()
  }
  return (
    <>
    <SingleSelect
    className={'select-sm'}
    options={statusList}
    selectedOptions={selectedStatus}
    setSelected={updateStatusSubmit}
    isDisabled={isMutating}
    />
    </>
  )
}

export default UpdateOrderStatus
