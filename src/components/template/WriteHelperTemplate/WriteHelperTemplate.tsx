'use client';
import CategoryTabs from '@/components/common/CategoryTabs/CategoryTabs';
import { useWriteHelper } from './hooks/useWriteHelper';
import MovementMethod from '@/components/WriteHelper/MovmentMethod/MovementMethod';
import AddressInput from '@/components/WriteErrand/AddressInput/AddressInput';
import SearchAddress from '@/components/common/SearchAddress/SearchAddress';
import { useSearchAddress } from '@/hooks/useSearchAddress';
export default function WriteHelperTemplate() {
  const {
    currCategory,
    address,
    isOpen,
    setIsOpen,
    register,
    handleAddressOpen,
    handleHelperSubmit,
    handleCurrMovement,
    currMovement,
    setValue,
  } = useWriteHelper();
  const { handleComplete, handleLocation } = useSearchAddress({
    setValue,
    setIsOpen,
  });
  return (
    <form className="flex flex-col gap-6 pt-6">
      <CategoryTabs currCategory={currCategory} setValue={setValue} />
      <MovementMethod
        currMovement={currMovement}
        handleCurrMovement={handleCurrMovement}
      />
      <AddressInput
        value={address}
        handleIsOpen={handleAddressOpen}
        register={register}
      />
      <SearchAddress
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        handleLocation={handleLocation}
        handleComplete={handleComplete}
      />
    </form>
  );
}
