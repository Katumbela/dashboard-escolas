
import { useState } from "react";

// Definir a interface para os documentos
interface DocumentData {
  idCard: File | null;
  photo: File | null;
  gradeDeclaration: File | null;
}

// Props que o componente vai receber
interface DocumentUploadFormProps {
  onSubmit: (documents: DocumentData) => void;
}

const DocumentUploadForm: React.FC<DocumentUploadFormProps> = ({ onSubmit }) => {
  const [documents, setDocuments] = useState<DocumentData>({
    idCard: null,
    photo: null,
    gradeDeclaration: null,
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files && files.length > 0) {
      setDocuments({
        ...documents,
        [name]: files[0],
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(documents);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Campos para upload dos documentos */}
      <input type="file" name="idCard" onChange={handleFileChange} required />
      <input type="file" name="photo" onChange={handleFileChange} required />
      <input type="file" name="gradeDeclaration" onChange={handleFileChange} required />
      <button type="submit">Finalizar Cadastro</button>
    </form>
  );
};

export default DocumentUploadForm;
