"use client";

import React, { useState, useRef, useCallback, useEffect } from "react";
import Webcam from "react-webcam";

// Photo filter configurations
const PHOTO_FILTERS = {
    none: { name: "Normal", css: "none", icon: "🔳" },
    grayscale: { name: "B&W", css: "grayscale(100%)", icon: "⬛" },
    sepia: { name: "Sepia", css: "sepia(80%)", icon: "🟫" },
    vintage: { name: "Vintage", css: "sepia(40%) contrast(90%) brightness(90%)", icon: "📷" },
    warm: { name: "Warm", css: "sepia(30%) saturate(120%) brightness(105%)", icon: "🌅" },
    cool: { name: "Cool", css: "saturate(80%) brightness(105%) hue-rotate(10deg)", icon: "❄️" },
    vivid: { name: "Vivid", css: "saturate(150%) contrast(110%)", icon: "🌈" },
    fade: { name: "Fade", css: "contrast(90%) brightness(110%) saturate(80%)", icon: "🌫️" },
};

// Default frame configurations
const DEFAULT_FRAME_CONFIGS = {
    "/frame 1.png": {
        name: "Happiness",
        aspectRatio: "591/1772",
        slots: [
            { top: 6.7, left: 12, width: 76, height: 26 },
            { top: 37, left: 12, width: 76, height: 26 },
            { top: 67, left: 12, width: 76, height: 26 },
        ],
    },
    "/frame 2.png": {
        name: "Frame 2",
        aspectRatio: "591/1772",
        slots: [
            { top: 2.2, left: 9.6, width: 76, height: 26 },
            { top: 30.5, left: 11.9, width: 76, height: 26 },
            { top: 56.6, left: 11.7, width: 76, height: 26 },
        ],
    },
    "/frame 3.png": {
        name: "Frame 3",
        aspectRatio: "591/1772",
        slots: [
            { top: 3.3, left: 12, width: 76, height: 26 },
            { top: 33.9, left: 12, width: 76, height: 26 },
            { top: 65.6, left: 12, width: 76, height: 26 },
        ],
    },
    "/frame 4.png": {
        name: "Frame 4",
        aspectRatio: "591/1772",
        slots: [
            { top: 3.6, left: 12, width: 76, height: 26 },
            { top: 34.8, left: 12, width: 76, height: 26 },
            { top: 67, left: 12, width: 76, height: 26 },
        ],
    },
    "/frame 5.png": {
        name: "Frame 5",
        aspectRatio: "591/1772",
        slots: [
            { top: 13.8, left: 8.8, width: 85, height: 26 },
            { top: 40.4, left: 8.8, width: 85, height: 26 },
            { top: 66.4, left: 8.8, width: 85, height: 26 },
        ],
    },
    "/frame 6.png": {
        name: "Frame 6",
        aspectRatio: "591/1772",
        slots: [
            { top: 3.3, left: 12, width: 76, height: 26 },
            { top: 31.6, left: 12, width: 76, height: 26 },
            { top: 59.9, left: 12, width: 76, height: 26 },
        ],
    },
};

export default function VirtualPhotobox() {
    const [images, setImages] = useState([null, null, null]);
    const [currentSlot, setCurrentSlot] = useState(0);
    const [countdown, setCountdown] = useState(null);
    const [isCapturing, setIsCapturing] = useState(false);
    const [selectedFrame, setSelectedFrame] = useState("/frame 1.png");
    const [cameraReady, setCameraReady] = useState(false);
    const [timerDelay, setTimerDelay] = useState(3);
    const [showAdjuster, setShowAdjuster] = useState(false);
    const [activeSlotIndex, setActiveSlotIndex] = useState(0);
    const [selectedFilter, setSelectedFilter] = useState("none");
    const [inputMode, setInputMode] = useState("camera"); // "camera" or "upload"

    // State untuk posisi slot yang bisa diatur
    const [frameConfigs, setFrameConfigs] = useState(DEFAULT_FRAME_CONFIGS);

    const webcamRef = useRef(null);
    const exportRef = useRef(null);
    const fileInputRefs = useRef([null, null, null]);

    const videoConstraints = {
        width: 480,
        height: 480,
        aspectRatio: 1,
        facingMode: "user",
    };

    const handleUserMedia = useCallback(() => {
        setCameraReady(true);
    }, []);

    const capturePhoto = useCallback(() => {
        if (webcamRef.current) {
            const imageSrc = webcamRef.current.getScreenshot({
                width: 480,
                height: 480,
            });
            return imageSrc;
        }
        return null;
    }, []);

    const startCaptureSequence = useCallback(async () => {
        if (!cameraReady) return;

        setIsCapturing(true);
        const newImages = [...images];
        let slot = 0;

        while (slot < 3) {
            setCurrentSlot(slot);

            for (let i = timerDelay; i > 0; i--) {
                setCountdown(i);
                await new Promise((resolve) => setTimeout(resolve, 1000));
            }

            setCountdown("📸");
            await new Promise((resolve) => setTimeout(resolve, 300));

            const photo = capturePhoto();
            if (photo) {
                newImages[slot] = photo;
                setImages([...newImages]);
            }

            setCountdown(null);
            slot++;

            if (slot < 3) {
                await new Promise((resolve) => setTimeout(resolve, 1000));
            }
        }

        setIsCapturing(false);
        setCurrentSlot(0);
    }, [cameraReady, images, capturePhoto, timerDelay]);

    const resetPhotos = useCallback(() => {
        setImages([null, null, null]);
        setCurrentSlot(0);
        setCountdown(null);
        setIsCapturing(false);
    }, []);

    // Handle file upload for a specific slot
    const handleFileUpload = useCallback((slotIndex, file) => {
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (e) => {
            setImages(prev => {
                const newImages = [...prev];
                newImages[slotIndex] = e.target.result;
                return newImages;
            });
        };
        reader.readAsDataURL(file);
    }, []);

    const downloadResult = useCallback(async () => {
        if (images.some((img) => img === null)) return;

        try {
            // Gunakan native Canvas API - tidak bergantung pada CSS parsing
            const frameConfig = frameConfigs[selectedFrame];

            // Ukuran canvas berdasarkan aspect ratio frame
            const [widthRatio, heightRatio] = frameConfig.aspectRatio.split("/").map(Number);
            const canvasWidth = 591 * 2; // 2x untuk kualitas tinggi
            const canvasHeight = Math.round((canvasWidth * heightRatio) / widthRatio);

            const canvas = document.createElement("canvas");
            canvas.width = canvasWidth;
            canvas.height = canvasHeight;
            const ctx = canvas.getContext("2d");

            // Helper function untuk load image
            const loadImage = (src) => {
                return new Promise((resolve, reject) => {
                    const img = new Image();
                    img.crossOrigin = "anonymous";
                    img.onload = () => resolve(img);
                    img.onerror = reject;
                    img.src = src;
                });
            };

            // Terapkan filter ke canvas context
            const filterCSS = PHOTO_FILTERS[selectedFilter].css;
            ctx.filter = filterCSS === "none" ? "none" : filterCSS;

            // 1. Gambar foto-foto terlebih dahulu (layer bawah)
            for (let i = 0; i < frameConfig.slots.length; i++) {
                const slot = frameConfig.slots[i];
                const photoSrc = images[i];

                if (photoSrc) {
                    const photo = await loadImage(photoSrc);

                    // Hitung posisi dan ukuran dalam pixel
                    const x = (slot.left / 100) * canvasWidth;
                    const y = (slot.top / 100) * canvasHeight;
                    const w = (slot.width / 100) * canvasWidth;
                    const h = (slot.height / 100) * canvasHeight;

                    // Gambar foto dengan object-cover effect
                    const photoRatio = photo.width / photo.height;
                    const slotRatio = w / h;

                    let sx, sy, sw, sh;
                    if (photoRatio > slotRatio) {
                        // Photo lebih lebar - crop horizontal
                        sh = photo.height;
                        sw = sh * slotRatio;
                        sx = (photo.width - sw) / 2;
                        sy = 0;
                    } else {
                        // Photo lebih tinggi - crop vertical
                        sw = photo.width;
                        sh = sw / slotRatio;
                        sx = 0;
                        sy = (photo.height - sh) / 2;
                    }

                    ctx.drawImage(photo, sx, sy, sw, sh, x, y, w, h);
                }
            }

            // Reset filter sebelum gambar frame
            ctx.filter = "none";

            // 2. Gambar frame di atas (layer atas)
            const frameImg = await loadImage(selectedFrame);
            ctx.drawImage(frameImg, 0, 0, canvasWidth, canvasHeight);

            // 3. Download hasil - dengan handling untuk iOS
            const dataUrl = canvas.toDataURL("image/png");

            // Detect iOS
            const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);

            if (isIOS) {
                // iOS: Buka di tab baru untuk save manual
                const newTab = window.open();
                if (newTab) {
                    newTab.document.write(`
                        <html>
                            <head><title>Kaelbox Photo</title></head>
                            <body style="margin:0;display:flex;justify-content:center;align-items:center;min-height:100vh;background:#111;">
                                <div style="text-align:center;">
                                    <p style="color:white;margin-bottom:16px;font-family:sans-serif;">Tekan dan tahan gambar untuk menyimpan</p>
                                    <img src="${dataUrl}" style="max-width:100%;max-height:80vh;"/>
                                </div>
                            </body>
                        </html>
                    `);
                    newTab.document.close();
                }
            } else {
                // Desktop/Android: Download langsung
                const link = document.createElement("a");
                link.download = `kaelbox-photo-${Date.now()}.png`;
                link.href = dataUrl;
                link.click();
            }

        } catch (error) {
            console.error("Error exporting image:", error);
            alert("Gagal mengexport gambar. Pastikan foto sudah lengkap.");
        }
    }, [images, selectedFrame, frameConfigs, selectedFilter]);

    // Handler untuk update posisi slot
    const updateSlotPosition = useCallback(
        (slotIndex, property, value) => {
            setFrameConfigs((prev) => {
                const newConfigs = { ...prev };
                const newSlots = [...newConfigs[selectedFrame].slots];
                newSlots[slotIndex] = {
                    ...newSlots[slotIndex],
                    [property]: parseFloat(value),
                };
                newConfigs[selectedFrame] = {
                    ...newConfigs[selectedFrame],
                    slots: newSlots,
                };
                return newConfigs;
            });
        },
        [selectedFrame]
    );

    // Reset ke default
    const resetToDefault = useCallback(() => {
        setFrameConfigs((prev) => ({
            ...prev,
            [selectedFrame]: { ...DEFAULT_FRAME_CONFIGS[selectedFrame] },
        }));
    }, [selectedFrame]);

    const allPhotosTaken = images.every((img) => img !== null);
    const currentFrameConfig = frameConfigs[selectedFrame];
    const activeSlot = currentFrameConfig.slots[activeSlotIndex];

    return (
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start justify-center w-full max-w-[1400px] mx-auto">
            {/* Left Panel - Camera & Controls */}
            <div className="w-full lg:flex-1 flex flex-col gap-6">

                {/* Mode Toggle */}
                <div className="flex bg-navy/5 dark:bg-white/5 p-1 rounded-xl max-w-sm mx-auto w-full">
                    <button
                        onClick={() => setInputMode("camera")}
                        className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-bold transition-all cursor-pointer ${inputMode === "camera"
                            ? "bg-primary text-navy shadow"
                            : "text-navy/60 dark:text-white/60 hover:text-navy dark:hover:text-white"
                            }`}
                    >
                        <span className="material-symbols-outlined text-lg">videocam</span>
                        Kamera
                    </button>
                    <button
                        onClick={() => setInputMode("upload")}
                        className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-bold transition-all cursor-pointer ${inputMode === "upload"
                            ? "bg-primary text-navy shadow"
                            : "text-navy/60 dark:text-white/60 hover:text-navy dark:hover:text-white"
                            }`}
                    >
                        <span className="material-symbols-outlined text-lg">upload</span>
                        Upload
                    </button>
                </div>

                {/* Camera Mode */}
                {inputMode === "camera" && (
                    <div className="relative aspect-square w-full max-w-sm mx-auto bg-navy/5 dark:bg-white/5 rounded-3xl overflow-hidden border-2 border-primary/30 shadow-2xl">
                        <Webcam
                            ref={webcamRef}
                            audio={false}
                            screenshotFormat="image/jpeg"
                            videoConstraints={videoConstraints}
                            onUserMedia={handleUserMedia}
                            mirrored={true}
                            className="absolute inset-0 w-full h-full object-cover"
                        />

                        {countdown !== null && (
                            <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/40 backdrop-blur-sm">
                                <div className="text-white text-9xl font-black animate-pulse drop-shadow-2xl">
                                    {countdown}
                                </div>
                            </div>
                        )}

                        {!cameraReady && (
                            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-navy/80 dark:bg-background-dark/90 backdrop-blur">
                                <span className="material-symbols-outlined text-6xl text-primary animate-pulse mb-4">
                                    videocam
                                </span>
                                <p className="text-white/80 text-sm font-medium">Menunggu akses kamera...</p>
                            </div>
                        )}

                        {isCapturing && (
                            <div className="absolute top-4 left-4 z-10 bg-primary/90 backdrop-blur text-navy px-4 py-1.5 rounded-full text-xs font-bold shadow-lg">
                                📸 Foto {currentSlot + 1} / 3
                            </div>
                        )}
                    </div>
                )}

                {/* Upload Mode */}
                {inputMode === "upload" && (
                    <div className="w-full max-w-sm mx-auto space-y-3">
                        <p className="text-sm text-navy/60 dark:text-white/60 text-center mb-4">
                            Upload 3 foto untuk mengisi frame
                        </p>
                        {[0, 1, 2].map((slotIndex) => (
                            <div key={slotIndex} className="relative">
                                <input
                                    type="file"
                                    accept="image/*"
                                    ref={(el) => (fileInputRefs.current[slotIndex] = el)}
                                    onChange={(e) => handleFileUpload(slotIndex, e.target.files?.[0])}
                                    className="hidden"
                                />
                                <button
                                    onClick={() => fileInputRefs.current[slotIndex]?.click()}
                                    className={`w-full flex items-center gap-4 p-4 rounded-2xl border-2 border-dashed transition-all cursor-pointer ${images[slotIndex]
                                        ? "border-green-500 bg-green-50 dark:bg-green-500/10"
                                        : "border-primary/30 bg-white/50 dark:bg-white/5 hover:border-primary hover:bg-primary/5"
                                        }`}
                                >
                                    {images[slotIndex] ? (
                                        <>
                                            <img
                                                src={images[slotIndex]}
                                                alt={`Foto ${slotIndex + 1}`}
                                                className="w-16 h-16 rounded-xl object-cover"
                                            />
                                            <div className="flex-1 text-left">
                                                <p className="font-bold text-green-600 dark:text-green-400">Foto {slotIndex + 1} ✓</p>
                                                <p className="text-xs text-navy/50 dark:text-white/50">Klik untuk ganti</p>
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center">
                                                <span className="material-symbols-outlined text-2xl text-primary">add_photo_alternate</span>
                                            </div>
                                            <div className="flex-1 text-left">
                                                <p className="font-bold text-navy dark:text-white">Foto {slotIndex + 1}</p>
                                                <p className="text-xs text-navy/50 dark:text-white/50">Klik untuk upload</p>
                                            </div>
                                        </>
                                    )}
                                </button>
                            </div>
                        ))}
                    </div>
                )}

                {/* Controls Container */}
                <div className="bg-white/50 dark:bg-white/5 backdrop-blur-sm rounded-3xl p-6 border border-primary/10 shadow-lg">
                    {/* Timer Selection - Only shown in camera mode */}
                    {inputMode === "camera" && (
                        <div className="flex flex-col gap-3 mb-6">
                            <div className="flex items-center gap-2 text-navy/70 dark:text-white/70">
                                <span className="material-symbols-outlined text-primary text-xl">timer</span>
                                <span className="text-sm font-bold uppercase tracking-wider">Timer Delay</span>
                            </div>
                            <div className="grid grid-cols-3 gap-3">
                                {[3, 5, 10].map((time) => (
                                    <button
                                        key={time}
                                        onClick={() => setTimerDelay(time)}
                                        disabled={isCapturing}
                                        className={`py-2.5 rounded-xl text-sm font-bold transition-all cursor-pointer border-2 ${timerDelay === time
                                            ? "bg-primary text-navy border-primary"
                                            : "bg-transparent text-navy dark:text-white border-primary/20 hover:border-primary/50"
                                            } disabled:opacity-50 disabled:cursor-not-allowed`}
                                    >
                                        {time}s
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Main Action Buttons */}
                    <div className="flex flex-col gap-3">
                        {/* Camera Capture Button - Only in camera mode */}
                        {inputMode === "camera" && (
                            <button
                                onClick={startCaptureSequence}
                                disabled={isCapturing || !cameraReady}
                                className="w-full flex items-center justify-center gap-2 bg-primary text-navy py-4 rounded-2xl font-black text-lg shadow-lg shadow-primary/20 hover:brightness-110 active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                            >
                                <span className="material-symbols-outlined text-2xl">photo_camera</span>
                                {isCapturing ? "Senyum! 😄" : "Mulai Foto"}
                            </button>
                        )}

                        {/* Photo Filter Selection */}
                        <div className="bg-white/50 dark:bg-white/5 backdrop-blur-sm rounded-2xl border border-primary/10 p-4 shadow-lg mt-6">
                            <div className="flex items-center gap-2 mb-3">
                                <span className="material-symbols-outlined text-primary text-xl">auto_awesome</span>
                                <span className="font-bold text-sm text-navy dark:text-white uppercase tracking-wider">Filter Foto</span>
                            </div>
                            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
                                {Object.entries(PHOTO_FILTERS).map(([key, filter]) => (
                                    <button
                                        key={key}
                                        onClick={() => setSelectedFilter(key)}
                                        className={`shrink-0 flex flex-col items-center gap-1 px-3 py-2 rounded-xl transition-all cursor-pointer ${selectedFilter === key
                                            ? "bg-primary text-navy"
                                            : "bg-navy/5 dark:bg-white/5 hover:bg-primary/20"
                                            }`}
                                    >
                                        <span className="text-lg">{filter.icon}</span>
                                        <span className="text-[10px] font-bold uppercase">{filter.name}</span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Controls Panel - Detached */}
                        <div className="bg-white/50 dark:bg-white/5 backdrop-blur-sm rounded-2xl border border-primary/10 overflow-hidden shadow-lg mt-4">
                            {/* Toggle Header */}
                            <button
                                onClick={() => setShowAdjuster(!showAdjuster)}
                                className="w-full flex items-center justify-between p-4 hover:bg-primary/5 transition-colors cursor-pointer"
                            >
                                <div className="flex items-center gap-2">
                                    <span className="material-symbols-outlined text-primary">tune</span>
                                    <span className="font-bold text-sm text-navy dark:text-white uppercase tracking-wider">Atur Posisi Foto</span>
                                </div>
                                <span className={`material-symbols-outlined transition-transform duration-300 text-navy/70 dark:text-white/70 ${showAdjuster ? 'rotate-180' : ''}`}>
                                    expand_more
                                </span>
                            </button>

                            {/* Collapsible Content */}
                            <div className={`overflow-hidden transition-all duration-300 ${showAdjuster ? "max-h-[500px]" : "max-h-0"}`}>
                                <div className="p-4 pt-0 space-y-4">
                                    {/* Slot Tabs */}
                                    <div className="flex bg-navy/5 dark:bg-white/5 p-1 rounded-xl">
                                        {[0, 1, 2].map((idx) => (
                                            <button
                                                key={idx}
                                                onClick={() => setActiveSlotIndex(idx)}
                                                className={`flex-1 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${activeSlotIndex === idx
                                                    ? "bg-primary text-navy shadow-sm"
                                                    : "text-navy/60 dark:text-white/60 hover:text-navy dark:hover:text-white"
                                                    }`}
                                            >
                                                Foto {idx + 1}
                                            </button>
                                        ))}
                                    </div>

                                    {/* Compact Grid Adjusters */}
                                    <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                                        {/* Top */}
                                        <div className="space-y-1">
                                            <div className="flex justify-between items-center px-1">
                                                <label className="text-[10px] font-bold uppercase text-navy/50 dark:text-white/50">Atas</label>
                                                <span className="text-[10px] font-mono text-primary">{activeSlot.top.toFixed(1)}%</span>
                                            </div>
                                            <input
                                                type="range"
                                                min="0"
                                                max="80"
                                                step="0.1"
                                                value={activeSlot.top}
                                                onChange={(e) => updateSlotPosition(activeSlotIndex, "top", e.target.value)}
                                                className="w-full h-1.5 bg-navy/10 dark:bg-white/10 rounded-full appearance-none accent-primary cursor-pointer"
                                            />
                                        </div>

                                        {/* Left */}
                                        <div className="space-y-1">
                                            <div className="flex justify-between items-center px-1">
                                                <label className="text-[10px] font-bold uppercase text-navy/50 dark:text-white/50">Kiri</label>
                                                <span className="text-[10px] font-mono text-primary">{activeSlot.left.toFixed(1)}%</span>
                                            </div>
                                            <input
                                                type="range"
                                                min="0"
                                                max="50"
                                                step="0.1"
                                                value={activeSlot.left}
                                                onChange={(e) => updateSlotPosition(activeSlotIndex, "left", e.target.value)}
                                                className="w-full h-1.5 bg-navy/10 dark:bg-white/10 rounded-full appearance-none accent-primary cursor-pointer"
                                            />
                                        </div>

                                        {/* Width */}
                                        <div className="space-y-1">
                                            <div className="flex justify-between items-center px-1">
                                                <label className="text-[10px] font-bold uppercase text-navy/50 dark:text-white/50">Lebar</label>
                                                <span className="text-[10px] font-mono text-primary">{activeSlot.width.toFixed(1)}%</span>
                                            </div>
                                            <input
                                                type="range"
                                                min="20"
                                                max="100"
                                                step="0.1"
                                                value={activeSlot.width}
                                                onChange={(e) => updateSlotPosition(activeSlotIndex, "width", e.target.value)}
                                                className="w-full h-1.5 bg-navy/10 dark:bg-white/10 rounded-full appearance-none accent-primary cursor-pointer"
                                            />
                                        </div>

                                        {/* Height */}
                                        <div className="space-y-1">
                                            <div className="flex justify-between items-center px-1">
                                                <label className="text-[10px] font-bold uppercase text-navy/50 dark:text-white/50">Tinggi</label>
                                                <span className="text-[10px] font-mono text-primary">{activeSlot.height.toFixed(1)}%</span>
                                            </div>
                                            <input
                                                type="range"
                                                min="10"
                                                max="40"
                                                step="0.1"
                                                value={activeSlot.height}
                                                onChange={(e) => updateSlotPosition(activeSlotIndex, "height", e.target.value)}
                                                className="w-full h-1.5 bg-navy/10 dark:bg-white/10 rounded-full appearance-none accent-primary cursor-pointer"
                                            />
                                        </div>
                                    </div>

                                    <div className="pt-2 border-t border-navy/5 dark:border-white/5 text-center">
                                        <button
                                            onClick={resetToDefault}
                                            className="text-[10px] text-red-500 hover:text-red-600 font-bold uppercase tracking-widest hover:underline py-1 cursor-pointer"
                                        >
                                            Reset Default
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {allPhotosTaken && (
                            <div className="grid grid-cols-2 gap-3 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                <button
                                    onClick={resetPhotos}
                                    className="flex items-center justify-center gap-2 bg-red-100 dark:bg-red-500/20 text-red-600 dark:text-red-400 py-3 rounded-xl font-bold hover:bg-red-200 dark:hover:bg-red-500/30 transition-colors cursor-pointer"
                                >
                                    <span className="material-symbols-outlined">restart_alt</span>
                                    Ulang
                                </button>
                                <button
                                    onClick={downloadResult}
                                    className="flex items-center justify-center gap-2 bg-green-100 dark:bg-green-500/20 text-green-700 dark:text-green-400 py-3 rounded-xl font-bold hover:bg-green-200 dark:hover:bg-green-500/30 transition-colors cursor-pointer"
                                >
                                    <span className="material-symbols-outlined">download_for_offline</span>
                                    Simpan
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Right Panel - Result Preview & Adjustments */}
            <div className="w-full lg:w-[320px] shrink-0 flex flex-col gap-6 lg:sticky top-24">
                {/* Frame Selector */}
                <div className="flex flex-col gap-3">
                    <span className="text-sm font-bold uppercase tracking-wider text-navy/60 dark:text-white/60">
                        Template Frame
                    </span>
                    <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-none">
                        {Object.keys(frameConfigs).map((framePath, idx) => (
                            <button
                                key={framePath}
                                onClick={() => setSelectedFrame(framePath)}
                                disabled={isCapturing}
                                className={`shrink-0 w-20 aspect-1/3 rounded-lg border-4 overflow-hidden transition-all cursor-pointer ${selectedFrame === framePath
                                    ? "border-primary shadow-lg scale-105"
                                    : "border-transparent opacity-70 hover:opacity-100 hover:border-primary/30"
                                    } disabled:opacity-50 disabled:cursor-not-allowed`}
                            >
                                <img
                                    src={framePath}
                                    alt={`Frame ${idx + 1}`}
                                    className="w-full h-full object-cover"
                                />
                            </button>
                        ))}
                    </div>
                </div>

                {/* Preview Container */}
                <div className="relative w-full max-w-[240px] mx-auto shadow-2xl rounded-sm overflow-hidden bg-white">
                    <div
                        ref={exportRef}
                        className="relative w-full"
                        style={{ aspectRatio: currentFrameConfig.aspectRatio }}
                    >
                        {/* Photo Slots */}
                        {currentFrameConfig.slots.map((slot, index) => (
                            <div
                                key={index}
                                className={`absolute z-10 overflow-hidden transition-all duration-200 ${showAdjuster && activeSlotIndex === index
                                    ? "ring-4 ring-primary ring-offset-2 ring-offset-black/50"
                                    : ""
                                    }`}
                                style={{
                                    top: `${slot.top}%`,
                                    left: `${slot.left}%`,
                                    width: `${slot.width}%`,
                                    height: `${slot.height}%`,
                                }}
                                onClick={() => {
                                    if (showAdjuster) setActiveSlotIndex(index);
                                }}
                            >
                                {images[index] ? (
                                    <img
                                        src={images[index]}
                                        alt={`Photo ${index + 1}`}
                                        className="w-full h-full object-cover"
                                        style={{ filter: PHOTO_FILTERS[selectedFilter].css }}
                                    />
                                ) : (
                                    <div
                                        className={`w-full h-full flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-800 ${isCapturing && currentSlot === index
                                            ? "animate-pulse bg-primary/20"
                                            : ""
                                            }`}
                                    >
                                        <div className="glass-panel size-8 rounded-full flex items-center justify-center mb-1">
                                            <span className="text-xs font-bold text-navy/50">{index + 1}</span>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}

                        {/* Frame Overlay */}
                        <img
                            src={selectedFrame}
                            alt="Photo Frame"
                            className="absolute inset-0 z-50 w-full h-full object-cover pointer-events-none"
                        />

                    </div>

                </div>

            </div>
        </div>
    );
}
