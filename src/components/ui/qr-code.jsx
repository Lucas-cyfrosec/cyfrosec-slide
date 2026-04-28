import { QrCode } from '@ark-ui/react/qr-code'

export default function QRCode({ value, size = 220, className = '' }) {
  return (
    <QrCode.Root
      value={value}
      encoding={{ ecc: 'M' }}
      className={className}
    >
      <QrCode.Frame
        style={{
          width: size,
          height: size,
          background: '#ffffff',
          border: '1px solid #dfe6ec',
          borderRadius: '0px',
          padding: '14px',
          display: 'grid',
          placeItems: 'center',
          boxSizing: 'border-box',
        }}
      >
        <QrCode.Pattern
          style={{
            fill: '#111111',
            width: '100%',
            height: '100%',
          }}
        />
      </QrCode.Frame>
    </QrCode.Root>
  )
}
