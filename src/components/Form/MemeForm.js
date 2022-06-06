import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { saveToLocalStorage, submitNewMeme } from '../../app/memesSlice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Meme from '../Meme/Meme'
import TXT from '../../constans/TXT'
import { isImageUrl } from '../../tools/isImageUrl'
import {
    ButtonStyled,
    FormLineStyled,
    FormStyled,
    InputStyled,
    InputSubmitStyled,
    LabelStyled,
} from './FormStyles'

const MemeForm = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [formData, setFormData] = useState({
        id: '',
        title: '',
        upvotes: 0,
        downvotes: 0,
        imgPath: '',
        type: 'REGULAR',
    })
    const [preview, setPreview] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setFormData({ ...formData, id: uuidv4() })
        dispatch(submitNewMeme(formData))
        dispatch(saveToLocalStorage())
        navigate('/regular')
    }
    const handlePreview = (e) => {
        e.preventDefault()
        if (isImageUrl(formData.imgPath)) {
            setPreview(true)
        } else {
            setFormData({ ...formData, imgPath: 'no-image' })
            setPreview(!preview)
        }
    }

    return (
        <div style={{ minHeight: '100vh' }}>
            <FormStyled onSubmit={handleSubmit}>
                <FormLineStyled>
                    <LabelStyled htmlFor="title">
                        {TXT.FORM_MEM_TITLE}
                    </LabelStyled>
                    <InputStyled
                        onChange={(e) =>
                            setFormData({ ...formData, title: e.target.value })
                        }
                        type="text"
                        name="title"
                        id="title"
                        value={formData.title}
                    />
                </FormLineStyled>
                <FormLineStyled>
                    <LabelStyled htmlFor="title">
                        {TXT.FORM_MEM_URL}
                    </LabelStyled>
                    <InputStyled
                        onChange={(e) => {
                            if (isImageUrl(e.target.value)) {
                                setFormData({
                                    ...formData,
                                    imgPath: e.target.value,
                                })
                            } else {
                                setFormData({
                                    ...formData,
                                    imgPath: 'no-image',
                                })
                            }
                        }}
                        type="text"
                        name="meme-url"
                        id="meme-url"
                        value={formData.imgPath}
                    />
                </FormLineStyled>

                <FormLineStyled>
                    <ButtonStyled onClick={handlePreview}>
                        {TXT.FORM_PREVIEW_BUTTON}
                    </ButtonStyled>
                    {preview && (
                        <InputSubmitStyled
                            type="submit"
                            value={TXT.FORM_SUBMIT_BUTTON}
                        />
                    )}
                </FormLineStyled>

                {preview && <Meme key={'meme-preview'} props={formData} />}
            </FormStyled>
        </div>
    )
}

export default MemeForm
