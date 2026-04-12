import { useMemo, useState } from 'react';
import './index.css';
import { api } from './services/api';
import { sanitizeName, validateName } from './utils/validation';
import PendantViewer from './components/PendantViewer';

const GOLD_PRICE_PER_GRAM = 65;

type PreviewData = {
  glbUrl: string;
  weight: number;
  price: number;
  downloadUrl: string;
};

function App() {
  const [name, setName] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [previewData, setPreviewData] = useState<PreviewData | null>(null);
  const [error, setError] = useState('');
  const [showAR, setShowAR] = useState(false);

  const isValid = useMemo(() => validateName(name), [name]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = sanitizeName(event.target.value);
    setName(value);
    setError('');
  };

  const handleGenerate = async () => {
    if (!isValid) {
      setError('El nombre debe tener 3-10 letras A-Z.');
      return;
    }

    try {
      setIsGenerating(true);
      const response = await api.post('/api/generate', { name });
      setPreviewData(response.data);
    } catch (err: any) {
      setError(err?.response?.data?.message || 'Error generando la vista previa.');
    } finally {
      setIsGenerating(false);
    }
  };

  const handleDownload = () => {
    if (!previewData?.downloadUrl) {
      return;
    }
    window.location.href = previewData.downloadUrl;
  };

  const handleOpenAR = () => {
    if (!previewData?.glbUrl) {
      return;
    }
    setShowAR(true);
  };

  const handleCloseAR = () => {
    setShowAR(false);
  };

  return (
    <div className="app">
      <header className="header">
        <h1>14K Name Pendant Generator</h1>
        <p>Modelo paramétrico industrial para fabricación de joyería.</p>
      </header>

      <section className="panel">
        <label htmlFor="name">Nombre (A-Z, 3-10 letras)</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={handleChange}
          placeholder="EVA"
          maxLength={10}
        />
        {!isValid && name.length > 0 && (
          <span className="error">Solo letras A-Z y 3-10 caracteres.</span>
        )}
        {error && <span className="error">{error}</span>}
        <button onClick={handleGenerate} disabled={!isValid || isGenerating}>
          {isGenerating ? 'Generando...' : 'Generar Vista Previa'}
        </button>
      </section>

      <section className="viewer">
        <div className="viewer-frame">
          {previewData?.glbUrl ? (
            <PendantViewer modelUrl={previewData.glbUrl} />
          ) : (
            <div className="placeholder">Vista previa 3D aparecerá aquí.</div>
          )}
        </div>
        <div className="metrics">
          <div>
            <strong>Peso estimado:</strong>{' '}
            {previewData ? `${previewData.weight.toFixed(2)} g` : '--'}
          </div>
          <div>
            <strong>Precio estimado:</strong>{' '}
            {previewData ? `$${previewData.price.toFixed(2)}` : `~$${GOLD_PRICE_PER_GRAM}`}
          </div>
          <button onClick={handleDownload} disabled={!previewData}>
            Confirmar y Descargar STL
          </button>
          <button onClick={handleOpenAR} disabled={!previewData}>
            Ver en AR (tamaño real)
          </button>
        </div>
      </section>
      {showAR && previewData?.glbUrl && (
        <div className="ar-modal" role="dialog" aria-modal="true">
          <div className="ar-modal__content">
            <div className="ar-modal__header">
              <h2>Vista en AR</h2>
              <button className="ar-modal__close" onClick={handleCloseAR}>
                Cerrar
              </button>
            </div>
            <model-viewer
              src={previewData.glbUrl}
              ar
              ar-modes="scene-viewer webxr quick-look"
              camera-controls
              auto-rotate
              exposure="1"
              style={{ width: '100%', height: '100%' }}
            />
            <p className="ar-modal__hint">
              Usa el botón de AR en el visor para abrir la cámara y ver el colgante en tamaño real.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
