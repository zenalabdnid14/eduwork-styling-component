import { Container, Row, Col } from 'react-bootstrap';
import "../style/style.css"

const Bio = () => {
    return(
        <div className='bio'>
            <Container className='text-center'>
                <Row>
                    <Col>
                        <div>
                            <h1>PROFIL SAYA</h1>
                            <br></br>
                            <p>Memiliki ketertarikan yang kuat dalam bidang programming dan desain sejak dari bangku kuliah.</p>
                            <p>Telah membuat banyak program untuk keperluan bisnis perusahaan.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Bio;