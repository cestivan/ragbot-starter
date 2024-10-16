package.json
{
  "name": "your-project-name",
  "version": "1.0.0",
  "private": true,
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-markdown": "^9.0.0",
    "remark-gfm": "^4.0.0",
    "ts-node": "^10.9.1",
    "typescript": "5.2.2",
    "i18next": "^21.6.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.37"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  }
}

app/i18n.ts
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

i18next
  .use(initReactI18next)
  .init({
    resources: {
      zh: {
        translation: {
          // Add your translations here
        },
      },
    },
    lng: 'zh', // Default language
    fallbackLng: 'zh',
    interpolation: {
      escapeValue: false, // React already safes from xss
    },
  });

export default i18next;

components/Configure.tsx
const similarityMetricOptions = [
  { label: '余弦相似度', value: 'cosine' },
  { label: '欧几里得距离', value: 'euclidean' },
  { label: '点积', value: 'dot_product' }
];

const handleSave = () => {
  // Save logic
};

<div className="chatbot-section flex flex-col origin:w-[800px] w-full origin:h-[735px] h-full p-6 rounded shadow-lg overflow-auto">
  <div className="grow">
    <div className='pb-6 flex justify-between'>
      <h1 className='chatbot-text-primary text-xl md:text-2xl font-medium'>配置</h1>
      <button
        onClick={onClose}
        className="chatbot-text-primary text-4xl font-thin leading-8"
      >
        取消
      </button>
      <button
        className='chatbot-button-primary flex rounded-md items-center justify-center px-2.5 py-3'
        onClick={handleSave}
      >
        保存配置
      </button>
    </div>
    <Footer />
  </div>
</div>

components/Bubble.tsx
{content.url ? (
  <div className="flex justify-end mt-3">
    <div className="flex items-center gap-2">
      <span className="text-sm">来源:</span>
      <Link href={content?.url} target="_blank">
        <div className="chatbot-faq-link flex items-center px-2 py-0.5">
          <svg width="14" height="7" viewBox="0 0 14 7" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.3333 0.127197H7.66665V1.46053H10.3333C11.4333 1.46053 12.3333 2.36053 12.3333 3.46053C12.3333 4.56053 11.4333 5.46053 10.3333 5.46053H7.66665V6.79386H10.3333C12.1733 6.79386 13.6666 5.30053 13.6666 3.46053C13.6666 1.62053 12.1733 0.127197 10.3333 0.127197ZM6.33331 5.46053H3.66665C2.56665 5.46053 1.66665 4.56053 1.66665 3.46053C1.66665 2.36053 2.56665 1.46053 3.66665 1.46053H6.33331V0.127197H3.66665C1.82665 0.127197 0.333313 1.62053 0.333313 3.46053C0.333313 5.30053 1.82665 6.79386 3.66665 6.79386H6.33331V5.46053ZM4.33331 2.79386H9.66665V4.1272H4.33331V2.79386Z" />
          </svg>
          <span className="text-xs font-semibold pl-1.5">Astra DB 常见问题</span>
        </div>
      </Link>
    </div>
  </div>
) : null}

components/Dropdown.tsx
<select>
  {options.map((option, idx) => (
    <option key={idx} value={option.value}>
      {option.label === 'Some Label' ? '一些标签' : option.label}
    </option>
  ))}
</select>

components/Toggle.tsx
<div className={`w-10 h-6 bg-gray-400 rounded-full shadow-inner ${enabled ? 'toggle-background' : ''}`}></div>
<div className={`absolute w-6 h-6 bg-white rounded-full shadow toggle-circle transition-all duration-300 ease-in-out ${enabled ? 'translate-x-4' : ''}`} onClick={onChange}></div>
<span className="ml-3 text-gray-700">{label}</span>