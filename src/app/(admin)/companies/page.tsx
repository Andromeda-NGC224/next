import AddCompanyButton from '@/app/components/addCompanyButton';
import CompanyRow from '@/app/components/company-row';
import CompanyTable from '@/app/components/company-table';
import Header from '@/app/components/header';
import SearchInput from '@/app/components/search-input';
import Toolbar from '@/app/components/toolbar';
import { Status } from '@/app/components/statusLabel';
import React from 'react';

export interface PageProps {}

export default function Companies({}: PageProps) {
  return (
    <>
      <Header>Companies</Header>
      <Toolbar action={<AddCompanyButton />}>
        <SearchInput />
      </Toolbar>
      <CompanyTable>
        <CompanyRow
          id={1}
          category="Technology"
          company="Google"
          status={Status.Pending}
          promotion={true}
          country="Ukraine"
          joinedDate="2023-01-01"
        />
      </CompanyTable>
    </>
  );
}
