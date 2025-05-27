import { EditCentralPage } from "@pages/centrals/edit";
import { Suspense } from "react";

export default function CreateCentral() {

  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <EditCentralPage />
    </Suspense>
  );
}
