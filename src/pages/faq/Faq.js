import React from 'react';
import { withRouter } from 'react-router-dom'

import { HashLink as Link } from 'react-router-hash-link';

import './Faq.scss';


class Faq extends React.Component {

    render() {
        return (
            <main className="users-view">
                <h2>
                    INFORMACJA
                </h2>

                <p>
                    <h2>
                        <strong>1. </strong>Jak <Link to={'/#contact'}>
                        &nbsp;zamówić indywidualny plan</Link>?
                    </h2>
                    Wykorzystująć
                    <Link to={'/#contact'}>
                     &nbsp;formularz</Link> na głównej stronie, krótko opisz czego potrzebujesz.
                    Odpiszę lub oddzwonię najszybciej jak to możliwe.
                </p>
                <p>
                    <h2>
                        <strong>2. </strong> Jak umówić się na konsultacje lub trening personalny?
                    </h2>

                    Jak wyżej, wykorzystaj <Link to={'/#contact'}>
                    &nbsp;formularz</Link> na głównej stronie, odpiszę lub oddzownię
                    najszybciej jak możliwe.
                </p>
                <p>
                    <h2>
                        <strong>3. </strong> Czym jest <Link to={'/my-blog'}>Dekerta Daily</Link>?
                    </h2>
                    To codzienny trening (workout of the day) w CrossFit Dekerta.
                    To programowanie treningowe dla ludzi, którzy chcą w znaczący sposób poprawić
                    swoją sylwetkę oraz kondycję niekoniecznie biorąc udział w rywalizacji na zawodach.
                    Program ma na celu systematyczny rozwój przy możliwym wykonywaniu jednostki treningowej
                    codziennie. Korzystasz? Skomentuj i pochwal się wynikiem, śledź swój progres!
                </p>
                <p>

                    <h2>
                        <strong>4. </strong> Czym jest <Link to={'/dekerta-blog'}>Dekerta Athlete Program</Link> ?
                    </h2>
                    To codzienny trening skierowany dla zawodników chcących walczyć na wysokim poziomie
                    w zawodach CrossFit. Jednostka treningowa przewiduje czas od 1:30h do 2:30h, zależne
                    od okresu i cyklu trenigowego.
                    Idea? Po pierwsze intensywność, nie objętość. Czyli zrób porządny trening,
                    daj z siebie 100% i idź się regenerować!
                    Po drugie, CrossFit nie jest po to by robić go samemu! Trenujemy razem, rywalizujemy,
                    wspieramy się nawzajem!
                    Dlatego organizowane są wspólne treningi i campy.
                    Trening Weighlifting w programie, tworzy Monika Grzesiak brązowa medalistka Mistrzostw Europy do lat 23.
                    Akademicka Wicemistrzyni Świata, multimedalista Mistrzostw Polski w podnoszeniu ciężarów.
                    Miesięczna subskrybcja wynosi zaledwie 9zł!
                    <p>Dołącz do zawodniczego community CrossFit Dekerta!</p>
                </p>
            </main>
        );
    }

}

export default withRouter(Faq);








