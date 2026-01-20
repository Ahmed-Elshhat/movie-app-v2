import { redirect } from "next/navigation";

export default async function WatchSeriesPage({
  params,
}: {
  params: { series: string };
}) {
  const {series} = await params;
  redirect(`/watch/${series}/1`);
}
