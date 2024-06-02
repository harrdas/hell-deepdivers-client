import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Home() {
  return (
    <>
      <h2 className="text-lg text-white">Stratagem Ranking</h2>
      <Tabs defaultValue="terminids" className="w-[400px]">
        <TabsList>
          <TabsTrigger value="terminids">Terminids</TabsTrigger>
          <TabsTrigger value="automatons">Automatons</TabsTrigger>
          <TabsTrigger value="illuminates">Illuminates</TabsTrigger>
        </TabsList>
        <TabsContent value="terminids">Terminids Best Combination</TabsContent>
        <TabsContent value="automatons">
          Automatons Best Combination
        </TabsContent>
        <TabsContent value="illuminates">
          Waiting for the day to democratize Illuminsates
        </TabsContent>
      </Tabs>
    </>
  );
}
