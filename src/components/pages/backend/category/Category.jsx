import React from 'react'
import Header from '../partials/Header';
import Footer from '../partials/Footer';
import Searchbar from '../partials/Searchbar';
import { Plus } from 'lucide-react';
// import AdvertisementTable from './CategoryTable';
import { StoreContext } from '@/components/store/storeContext';
import { setIsAdd } from '@/components/store/storeAction';
import ModalValidation from '../partials/modals/ModalValidation';
import ModalError from '../partials/modals/ModalError';
import ToastSuccess from '../partials/ToastSuccess';
import ModalAddAdvertisement from './ModalAddCategory';
import CategoryTable from './CategoryTable';
import SideNavigation from '../partials/SideNavigation';
import ModalAddCategory from './ModalAddCategory';

const Category = () => {
      const { dispatch, store } = React.useContext(StoreContext);

      const handleAdd = () => {
        dispatch(setIsAdd(true));
      };
  return (
    <>
      <section className="layout-main ">
        <div className="layout-division ">
          <SideNavigation menu="category" />
          <main>
            <Header
              title="Category"
              subtitle="Manage Zanerobe Category"
            />
            <div className="p-8">
              <div className="flex justify-between items-center">
                <Searchbar />

                <button className="btn btn-add" onClick={handleAdd}>
                  <Plus size={16} /> Add New
                </button>
              </div>

              <CategoryTable />
            </div>

            <Footer />
          </main>
        </div>
      </section>
      {store.validate && <ModalValidation />}
      {store.error && <ModalError />}
      {store.success && <ToastSuccess />}
      {store.isAdd && <ModalAddCategory />}
    </>
  );
}

export default Category
