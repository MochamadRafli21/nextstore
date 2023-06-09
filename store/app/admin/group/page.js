import { getGroup } from "@/app/store/group";

import Link from "next/link";
import GroupTable from "@/components/admin/groupTable";

export default async function GroupAdmin() {
  const resG = await getGroup()
  const groupList = resG ? resG.data: [];
  return (
    <main className="h-full flex flex-col items-center justify-between">
    <div className="w-full bg-primary flex justify-between p-2 text-primary-content">
    <h1 className="font-bold text-lg">
    Daftar Group
    </h1>
    <Link href="/admin/group/add">
    <button className="btn btn-accent btn-sm btn-active">
    + Group Baru
    </button>
    </Link>
    </div>

    <div className="m-2 text-base-content text-lg font-bold">
    <GroupTable
    groups = {groupList}
    />
    </div>

    </main>
  )
}
