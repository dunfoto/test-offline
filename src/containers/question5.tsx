import React from 'react';
import { itemQ5 } from '../common/type';

interface Question5Props {
    data: itemQ5[];
    updateData: Function;
    updateBoolean: Function;
    deleteQ5: Function;
}

const Question5 = React.memo((props: Question5Props) => {
    const { data, updateData, updateBoolean, deleteQ5 } = props;

    const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>, _id: number) => {
        event.preventDefault();
        updateData(_id, event.target.value);
    }

    const onChangeCheckBox = (event: React.ChangeEvent<HTMLInputElement>, _id: number) => {
        updateBoolean(_id, event.target.checked, 'active');
    }

    const enableEditList = (event: React.MouseEvent, _id: number, type: boolean) => {
        event.preventDefault();
        updateBoolean(_id, type, 'edit');
    }

    const onKeyDownList = (event: React.KeyboardEvent, _id: number) => {
        if (event.keyCode === 13) {
            updateBoolean(_id, false, 'edit');
        }
    }

    return (
        <ul>
            <i>You can click to text in list for show input edit this line.</i>
            {data.map(item => {
                return (
                    <li key={item._id} className="list-q5">
                        <input type="checkbox" checked={item.active} onChange={(event: React.ChangeEvent<HTMLInputElement>) => onChangeCheckBox(event, item._id)} />
                        {item.edit ? (
                            <React.Fragment>
                                <input
                                    value={item.title}
                                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => onChangeInput(event, item._id)}
                                    onKeyDown={(event: React.KeyboardEvent) => onKeyDownList(event, item._id)}
                                />
                                <button onClick={(event: React.MouseEvent) => enableEditList(event, item._id, false)}>&#10003;</button> {/* Haven't feature cancel edit */}
                                <button className="list-q5-remove" onClick={(event: React.MouseEvent) => deleteQ5(item._id)}>Delete</button>
                            </React.Fragment>
                        ) : (
                                <div onClick={(event: React.MouseEvent) => enableEditList(event, item._id, true)}>
                                    {item.title}
                                </div>
                            )}
                    </li>
                )
            })}
        </ul>
    );
})

export default Question5;
