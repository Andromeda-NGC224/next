import Header from '@/app/components/header';

export interface PageProps {
  params: {
    id: string;
  };
}

export default function Companies({ params }: PageProps) {
  return (
    <>
      <Header>Company {params.id}</Header>
    </>
  );
}
