import { ReactElement, ReactNode, useState } from "react";
import { useTranslation } from 'react-i18next';
import { DownFill } from 'antd-mobile-icons';
import { Popover } from 'antd-mobile'
import { Action } from 'antd-mobile/es/components/popover';
import i18n from '../../lang/index'
import './index.scss'

const actions: Action[] = [
    { key: 'zh', text: '简体中文' },
    { key: 'en', text: 'English' },
    { key: 'ma', text: 'Melayu' },
]

const LandingIndex = (): ReactElement<ReactNode> => {
    const { t } = useTranslation();
    const [langauge, setLanguage] = useState<string>(localStorage.getItem('languageName') || 'English');
    const [title, setTitle] = useState<string>(localStorage.getItem('language_lucky') || 'en');
    return (
        <div className="landing-index">
            <div className="top-bg-box">
                <img src={require('../../assets/images/top_bg.png')} alt="" />
                {/* 语言设置 */}
                <div className="select-language">
                    <p>
                        {/* 语言 */}
                        {t('public.language')}
                    </p>
                    <Popover.Menu
                        actions={actions}
                        placement='topRight'
                        onAction={(node: Action) => {
                            const key = String(node.key);
                            const text = String(node.text)
                            setLanguage(text);
                            setTitle(key);
                            localStorage.setItem('language_lucky',key);
                            localStorage.setItem('languageName',text)
                            i18n.changeLanguage(key);
                        }}
                        trigger='click'
                    >
                        <div className="select-langauge">
                            {langauge}
                            <span><DownFill /></span>
                        </div>
                    </Popover.Menu>
                </div>
            </div>
            <div className="down-remark">
                <img src={require(`../../assets/images/${title}_title.png`)} alt="" />
            </div>
            <div className="down-btn" onClick={() => {
                const down = document.createElement('a');
                down.download = 'Lucky Dog.apk'
                down.href = 'https://oss.luckydog.asia/apk/lucky_dog.apk';
                document.body.appendChild(down);
                down.click();
                down.remove();
            }}>
                {/* Download */}
                {t('public.down')}
            </div>
            <div className="remark-title">
                {/* How to play */}
                {t('public.remark')}
            </div>
            <div className="demo-list">
                <img src={require('../../assets/images/demo_bg.png')} alt="" />
                <p>
                    {/* 连续合成 */}
                    {t('public.demo_remark')}
                </p>
            </div>
            <p className="reward-content">
                100% {t('public.get')} <span>RM 50</span>
            </p>
        </div>
    )
};

export default LandingIndex;