import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { saveToLocalStorage, submitNewMeme } from '../../app/memesSlice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Meme from '../Meme/Meme'
import TXT from '../../constans/TXT'
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

    const [previewData, setPreviewData] = useState({
        id: '',
        title: '',
        upvotes: 0,
        downvotes: 0,
        imgPath: 'no-image',
        type: 'REGULAR',
    })
    const [imageExist, setImageExist] = useState(false)
    const [error, setError] = useState(false)
    const [preview, setPreview] = useState(false)

    function checkImage(url) {
        const image = new Image()
        image.onload = function () {
            if (this.width > 0) {
                setImageExist(true)
                setPreviewData({ ...formData, imgPath: url })
                setPreview(true)
                setError(false)
            }
        }
        image.onerror = function () {
            setImageExist(false)
            setPreviewData({ ...formData, imgPath: 'no-image' })
            setPreview(true)
            setError(true)
        }
        image.src = url
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setFormData({ ...formData, id: uuidv4() })
        checkImage(formData.imgPath)
        dispatch(submitNewMeme(formData))
        dispatch(saveToLocalStorage())
        navigate('/regular')
    }
    const handlePreview = (e) => {
        e.preventDefault()
        checkImage(formData.imgPath)
    }

    return (
        <div style={{ minHeight: '100vh' }}>
            <FormStyled onSubmit={handleSubmit}>
                <FormLineStyled>
                    <LabelStyled htmlFor="title">
                        {TXT.FORM_MEM_TITLE}
                    </LabelStyled>
                    <InputStyled
                        onChange={(e) => {
                            setFormData({ ...formData, title: e.target.value })
                            setPreviewData({
                                ...formData,
                                title: e.target.value,
                            })
                        }}
                        type="text"
                        name="title"
                        id="title"
                        value={formData.title}
                    />
                </FormLineStyled>
                <FormLineStyled>
                    <LabelStyled htmlFor="meme-url">
                        {TXT.FORM_MEM_URL}
                    </LabelStyled>
                    <InputStyled
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                imgPath: e.target.value,
                            })
                        }
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
                    {imageExist && (
                        <InputSubmitStyled
                            type="submit"
                            value={TXT.FORM_SUBMIT_BUTTON}
                        />
                    )}
                </FormLineStyled>
                {error && TXT.FORM_ERROR}

                {preview && <Meme key={'meme-preview'} props={previewData} />}
            </FormStyled>
        </div>
    )
}

export default MemeForm
