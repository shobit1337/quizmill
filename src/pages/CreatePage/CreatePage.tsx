import { CreateCard } from "../../components";

function CreatePage() {
  return (
    <main className="p-lg d-flex flex-column gap-lg">
      <CreateCard />
      <CreateCard />
      <CreateCard />
      <CreateCard />
      <CreateCard />
      <div className="d-flex justify-center">
        <button className="btn btn-sm btn-rounded">
          Add Question <i className="fas fa-plus"></i>
        </button>
      </div>
    </main>
  );
}

export default CreatePage;
