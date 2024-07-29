import Button from '../../ui/Button.jsx'
import CreateCabinForm from './CreateCabinForm.jsx'
import { useTranslation } from 'react-i18next'
import Modal from '../../ui/Modal.jsx'

function AddCabin() {
  const { t } = useTranslation()
  return (
    <div>
      <Modal>
        <Modal.Open opens="cabin-form">
          <Button>{t('cabins.addNewCabin')}</Button>
        </Modal.Open>
        <Modal.Window name="cabin-form">
          <CreateCabinForm />
        </Modal.Window>
      </Modal>
    </div>
  )
}

// const AddCabin = () => {
//   const [isOpenModal, setIsOpenModal] = useState(false)
//   const { t } = useTranslation()
//   return (
//     <>
//       <Button onClick={() => setIsOpenModal((show) => !show)}>
//         {t('cabins.addNewCabin')}
//       </Button>
//       {isOpenModal && (
//         <Modal onClose={() => setIsOpenModal(false)}>
//           {' '}
//           <CreateCabinForm onCloseModal={() => setIsOpenModal(false)} />{' '}
//         </Modal>
//       )}
//     </>
//   )
// }

export default AddCabin
